import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "../ui/button"

interface Props {
  totalPages: number;
}

export const CustomPagination = ({ totalPages }: Props) => {

  let actualPage = 5;

  return (
    <div className="flex items-center justify-center space-x-2">
      <Button variant="outline" size="sm" disabled={actualPage === 1}>
        <ChevronLeft className="h-4 w-4" />
        Anterior
      </Button>

      {
        Array.from({ length: totalPages }).map((_, index) => (
          <Button
            size="sm"
            key={index}
            variant={index + 1 === actualPage ? 'default' : 'outline'}
          >
            {index + 1}
          </Button>
        ))
      }

      {/* ... */}
      {/* <Button variant="ghost" size="sm" disabled>
        <MoreHorizontal className="h-4 w-4" />
      </Button> */}

      <Button variant="outline" size="sm" disabled={actualPage >= totalPages}>
        Siguiente
        <ChevronRight className="h-4 w-4" />
      </Button>
    </div>
  )
}
