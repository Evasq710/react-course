import { useOptimistic, useState, useTransition } from "react";
import { toast } from "sonner";

interface Comment {
  id: number;
  text: string;
  optimistic?: boolean;
}

let lastId = 2;

export const InstagromApp = () => {

  /**
   * @function useTransition: lets you render a part of the UI in the background
   * @returns
   * - isPending: flag that tells you wether there is a pending Transition
   * - startTransition: function that lets you mark updates as a Transition
   */
  const [isPending, startTransition] = useTransition();

  const [commments, setComments] = useState<Comment[]>([
    { id: 1, text: 'Gran Foto!' },
    { id: 2, text: 'Me encanta <3' }
  ]);

  /**
   * @function useOptimistic: lets you show a different state while an async action is underway.
   * It accepts some state as an argument and returns a copy of the state that can be different
   * during the duration of an async action, such as a network request.
   * 
   * @param state: the value to be returned initially and whenever no action is pending
   * @param updateFn: look below for more info
   * 
   * @returns optimisticState: The resulting optimistic state. It is equal to `state`, UNLESS an action is pending,
   * in which case it is equal to the value returned by `updateFn`
   * @returns addOptimistic: Dispatching function to call when you have an optimistic update.
   * It takes one argument (`optmisticValue`) and will call the `updateFn` with `state` and `optimisticValue`
   */
  const [optimisticComments, addOpptimisticComment] = useOptimistic(
    // state
    commments,
    /**
     * @function updateFn:
     * 
     * @param currentState: the current state
     * @param optimisticValue: the optimistic value passed to `addOptimistic` function
     * 
     * @returns: the merged value of the currentState and optimisticValue (the resulting optimistic state)
     */
    (currentComments, newCommentText: string) => {
      lastId++;

      return [...currentComments, {
        id: lastId,
        text: newCommentText,
        optimistic: true
      }]
    });

  // FormData gets values from NAMED tags 
  const handleAddComment = async (formData: FormData) => {
    const messageText = formData.get('post-message') as string;

    /**
     * Calling the dispatching function to perform an optmistic update.
     * It takes one argument (`optmisticValue`) and will call the `updateFn` with `state` and `optimisticValue`
     */
    addOpptimisticComment(messageText);

    /**
     * The function passed to startTransition (action) updates some state by calling one or more set functions.
     * React calls the `action` function with no parameters and marks all state updates as Transitions
     */
    startTransition(async () => {
      // Simulating latency when saving a new comment in the database
      await new Promise(resolve => setTimeout(resolve, 3000));

      if (Math.random() >= 0.5) {
        // Simulating a successful save operation
        setComments(prev => [...prev, {
          id: new Date().getTime(),
          text: messageText,
        }])
        console.log('Mensaje grabado');
      } else {
        // Simulating a failed save operation
        toast('Error al agregar el comentario', {
          description: 'Intente nuevamente',
          duration: 10_000,
          position: 'top-right',
          action: {
            label: 'Cerrar',
            onClick: () => toast.dismiss(),
          }
        })
      }
    });
  }

  return (
    <div className="bg-slate-700 h-screen flex flex-col items-center justify-center">
      {/* Post de ejemplo */}
      <div className="flex flex-col items-center justify-center bg-gray-300 rounded-t-3xl p-4 w-[500px]">
        <img
          src="https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=500&h=500&fit=crop"
          alt="Instagrom"
          className="object-cover rounded-xl mb-4"
        />
        <p className="text-black font-bold mb-4">
          Mira que interesante esta funcionalidad de la API de React.
        </p>
      </div>

      {/* Comentarios */}
      <ul className="flex flex-col items-start justify-center bg-gray-300 w-[500px] p-4">
        {
          optimisticComments.map(comment => (
            <li key={comment.id} className="flex items-center gap-2 mb-2">
              <div className="bg-blue-500 rounded-full w-10 h-10 flex items-center justify-center">
                <span className="text-white text-center">A</span>
              </div>
              <p className="text-black">{comment.text}</p>
              {
                comment.optimistic && (
                  <span className="text-gray-500 text-sm">enviando...</span>
                )
              }
            </li>
          ))
        }
      </ul>

      {/* Formulario de comentarios */}
      <form
        action={handleAddComment}
        className="flex flex-col items-center justify-center bg-gray-300 w-[500px] rounded-b-3xl p-4"
      >
        <input
          type="text"
          name="post-message"
          placeholder="Escribe un comentario"
          required
          className="w-full p-2 rounded-md mb-2 text-black bg-white"
        />
        <button
          type="submit"
          disabled={isPending}
          className="bg-blue-500 text-white p-2 rounded-md w-full"
        >
          Enviar
        </button>
      </form>
    </div>
  )
}