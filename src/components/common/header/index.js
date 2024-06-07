"use client";
import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import menuItems from "./menu.json";
import Link from "next/link";
import Image from "next/image";

const Header = () => {
  return (
    <Navbar expand="lg" className="bg-dark" data-bs-theme="dark" collapseOnSelect>
      <Container>
        <Navbar.Brand href="/" as={Link}>
          
          <Image src="/images/logo.png" width={272} height={43} alt="cosmo shop logo"/>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
          {menuItems.map((item) => (
              <Nav.Link key={item.id} href={item.url} as={Link}>
                {item.title}
              </Nav.Link>
            ))}
          </Nav>
        </Navbar.Collapse>
        <Link href="/dashboard" > Dashboard</Link>
      </Container>
    </Navbar>
  );
};

export default Header;
