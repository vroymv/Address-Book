import React, { useEffect, useState } from "react";
import {
  Outlet,
  useLoaderData,
  Form,
  redirect,
  NavLink,
  useNavigation,
  useSubmit
} from "react-router-dom";
import { getContacts, createContact } from "../Contact";

// export async function loader({request}) {
//   const url = new URL(request.url);
//   const q = url.searchParams.get("q");
//   const contacts = await getContacts(q);
//   return { contacts, q };
// }

var contacts;

export async function loader() {
  var contacts;
  try {
    const response = await fetch('/api'); // Fetch data from the API
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }

    contacts = await response.json(); // Parse response as JSON
  } catch (error) {
    console.error('Error fetching data:', error);
    return null; // Handle errors appropriately or return a default value
  }
  return contacts;
}

export async function firstContactLoader(){
  const contacts = await loader();
  const firstContact = contacts[0];
  return firstContact;
}

export async function blankContact(){
  const contact = {
    firstName: "",
    lastName: "",
    twitter: "",
    avatar: "",
    notes: ""
  }

  return contact;
}


export async function createContactAction() {
  var contact;
  try{
    const response = await fetch('/createAddress');
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }

    contact = await response.json(); 
    console.log(contact);
  }
  catch(error) {
    console.log(error);
  }
  return redirect(`/contacts/${contact.id}/edit`);
}

export function Home() {
  const contacts = useLoaderData();

  // useEffect(()=>{
  //   document.getElementById('q').value=q
  //  }, [q]);

  const navigation = useNavigation;
  const submit = useSubmit();

  return (
    <>
      <div id="sidebar">
        <h1>React Router Contacts</h1>
        <div>
          <Form id="search-form" role="search">
            <input
              id="q"
              aria-label="Search contacts"
              placeholder="Search"
              type="search"
              name="q"
              // defaultValue={q}
              onChange={
                (e)=>{
                  submit(e.currentTarget.form)                }
              }
            />
            <div id="search-spinner" aria-hidden hidden={true} />
            <div className="sr-only" aria-live="polite"></div>
          </Form>
          <Form method="post">
            <button type="submit">New</button>
          </Form>
        </div>
        <nav>
          {contacts.length ? (
            <ul>
              {contacts.map((contact, index) => (
                <li key={index}>
                  <NavLink
                    to={`contacts/${contact.id}`}
                    className={function ({ isActive, isPending }) {
                      return isActive ? "active" : isPending ? "pending" : "";
                    }}
                  >
                    {contact.firstName || contact.lastName ? (
                      <>
                        {contact.firstName} {contact.lastName}
                      </>
                    ) : (
                      <i>No Name</i>
                    )}{" "}
                    {contact.favorite && <span>★</span>}
                  </NavLink>
                </li>
              ))}
            </ul>
          ) : (
            <p>
              <i>No contacts</i>
            </p>
          )}
        </nav>
      </div>
      <div
        id="detail"
        className={navigation.state === "loading" ? "loading" : ""}
      >
        <Outlet />
      </div>
    </>
  );
}
