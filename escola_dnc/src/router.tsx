import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from 'react-router-dom';
import Rankings from './views/Rankings/Rankings';

/**
 * Cria um roteador utilizando o método `createBrowserRouter` e 
 * define as rotas da aplicação utilizando o método `createRoutesFromElements`.
 */
const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      {/* Define uma rota para o caminho "/" que renderiza o componente `Rankings` */}
      <Route path="/" element={<Rankings />} />
    </>,
  ),
);

/**
 * Componente `PrincipalRoute` que utiliza o roteador criado 
 * para fornecer as configurações de rota para os componentes filhos.
 * 
 * @returns JSX.Element - Um elemento JSX que representa o provedor de roteador configurado.
 */
const PrincipalRoute = () => {
  return <RouterProvider router={router} />;
};

export default PrincipalRoute;
