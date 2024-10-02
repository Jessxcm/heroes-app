import { render, screen } from "@testing-library/react"
import { PublicRouter } from "../../src/router/PublicRouter"
import { AuthContext } from "../../src/auth/context"
import { MemoryRouter, Route, Routes } from "react-router-dom"

describe('Pruebas en <publicRoute></publicRoute>', () => {
    test('debe mostrar el children si no esta autenticado', () => { 
        const contextValue = {
            logged: false
        }
        render(
            <AuthContext.Provider value={ contextValue}>
                <PublicRouter>
                    <h1>Ruta pública</h1>
                </PublicRouter>
            </AuthContext.Provider>
        );
        expect( screen.getByText('Ruta pública'));
     })

     test('debe de navegar si esta autenticado', () => { 
        const contextValue = {
            logged: true,
            user: {
                name: 'Strider',
                id: 'ABC123'
            }
        }
        render(
            <AuthContext.Provider value={ contextValue}>
                <MemoryRouter initialEntries={['/login']}>
                <Routes>
                    <Route path="login" element={
                        <PublicRouter>
                        <h1>Ruta pública</h1>
                    </PublicRouter>
                    }></Route>
                    <Route path="marvel" element={<h1>Pagina de Marvel</h1>}></Route>
                </Routes>
                
                </MemoryRouter>
            </AuthContext.Provider>
        );

        screen.debug();
     })
 })