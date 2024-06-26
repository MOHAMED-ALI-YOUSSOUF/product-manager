"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import { Container, Nav, Navbar, Offcanvas } from "react-bootstrap";
import "./header.scss";
import menuItems from "./menu.json";
const DashboardHeader = () => {
  const pathname = usePathname();

  return (
    <Navbar expand={false} className="bg-danger mb-3" collapseOnSelect>
      <Container>
        <Navbar.Brand href="#">Product Manager</Navbar.Brand>
        <Navbar.Toggle aria-controls={`dashboardOffcanvas`} />
        <Navbar.Offcanvas
          id={`dashboardOffcanvas`}
          aria-labelledby={`dashboardOffcanvasLabel`}
          placement="start"
        >
          <Offcanvas.Header closeButton>
            <Offcanvas.Title id={`offcanvasNavbarLabel`}>
              Product Manager
            </Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <Nav className="justify-content-center flex-grow-1 pe-3">
              {menuItems.map((item) => (
                <Nav.Link
                  key={item.id}
                  href={item.url}
                  as={Link}
                  active={pathname === item.url}
                >
                  {" "}
                  {item.title}
                </Nav.Link>
              ))}
              <Nav.Link> SignOut</Nav.Link>
            </Nav>
          </Offcanvas.Body>
        </Navbar.Offcanvas>
      </Container>
    </Navbar>
  );
};

export default DashboardHeader;
