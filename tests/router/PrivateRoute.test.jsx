import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { AuthContext } from "../../src/auth/context"
import { PrivateRouter } from '../../src/router/PrivateRouter';


describe('Pruebas en el <PrivateRoute />', () => {

    test('debe de mostrar el children si está autenticado', () => {

        Storage.prototype.setItem = jest.fn();

        
        const contextValue = {
            logged: true,
            user: {
                id: 'abc',
                name: 'Juan Carlos'
            }
        }

        render(
            <AuthContext.Provider value={ contextValue }>
                <MemoryRouter initialEntries={['/search?q=batman']}>
                    <PrivateRouter>
                        <h1>Ruta privada</h1>
                    </PrivateRouter>
                </MemoryRouter>
            </AuthContext.Provider>
        );

        expect( screen.getByText('Ruta privada') ).toBeTruthy();
        expect( localStorage.setItem ).toHaveBeenCalledWith('lastPath', '/search?q=batman');

    });

});