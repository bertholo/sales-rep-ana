import React from 'react';
import { Navbar, Nav, NavDropdown, Image } from 'react-bootstrap';

function TopNav({ t, handleLanguageChange }) {
    return (
        <Navbar expand="md" className='p-3' bg="primary" data-bs-theme="dark" fluid>
            <Navbar.Brand className='px-4 fs-1' href="#home">
                Direcionaço
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
                <Nav className="ms-auto">
                    <Nav.Link href="#products">{t('ourProducts')}</Nav.Link>
                    <Nav.Link href="#aboutUs">{t('aboutUs')}</Nav.Link>
                    <Nav.Link href="#contact">{t('contactUs')}</Nav.Link>
                    <NavDropdown title={t('partners')} id="navbarScrollingDropdown">
                        <NavDropdown.Item target="_blank" rel="noopener noreferrer" disabled>
                            <Image src="https://tubosapolo.com.br/wp-content/uploads/2023/10/apolo.png" alt="Clickable Image" fluid />
                        </NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item target="_blank" rel="noopener noreferrer" disabled>
                            <Image src="https://www.secur.com.br/wp-content/uploads/2023/05/logomarca-secur.png" alt="Clickable Image" fluid />
                        </NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item target="_blank" rel="noopener noreferrer" disabled>
                            <Image src="https://ipcbrasil.ind.br/wp-content/uploads/2022/08/logo-ipc.png" alt="Clickable Image" fluid />
                        </NavDropdown.Item>
                    </NavDropdown>
                    <NavDropdown title={t('Languages')}>
                        <NavDropdown.Item onClick={() => handleLanguageChange('pt')}>Pt</NavDropdown.Item>

                        <NavDropdown.Item onClick={() => handleLanguageChange('en')}>En</NavDropdown.Item>
                    </NavDropdown>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}

export default TopNav;