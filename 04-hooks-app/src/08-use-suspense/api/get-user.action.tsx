
export interface User {
  id: number;
  name: string;
  location: string;
  role: string;
}

export const getUserAction = async (id: number) => {
  // Simulating latency
  await new Promise(resolve => setTimeout(resolve, 2000));

  return {
    id: id,
    name: 'Elías Vasquez',
    location: 'Ottawa, Canada',
    role: 'Instructor de Programación'
  }
}