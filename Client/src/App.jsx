import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Home, loader as contactsLoader } from "./routes/Home";
import Errorpage from "./routes/Errorpage";
import { Contact, contactLoader, deleteContactAction } from "./routes/Contact";
import {
  createContactAction,
  firstContactLoader,
  blankContact,
} from "./routes/Home";
import { Edit, updateContactAction } from "./routes/Edit";

const allContacts = await firstContactLoader();
function firstContactHandler() {
  return allContacts.firstContact;
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <Errorpage />,
    loader: contactsLoader,
    action: createContactAction,
    children: [
      {
        index: true,
        element: <Contact />,
        loader: firstContactLoader,
        errorElement: <Errorpage />,
      },
      {
        path: "contacts",
        element: <Contact />,
        errorElement: <Errorpage />,
      },
      {
        path: "contacts/:contactId",
        loader: contactLoader,
        action: deleteContactAction,
        element: <Contact />,
        errorElement: <Errorpage />,
      },
      {
        path: "contacts/:contactId/edit",
        loader: contactLoader,
        element: <Edit />,
        action: updateContactAction,
        errorElement: <Errorpage />,
      },
      {
        path: "contacts/:contactId/edit/update",
        element: <Home/>,
        loader: contactsLoader,
        errorElement: <Errorpage />,
        action: updateContactAction,
      },
    ],
  },
]);

export default function App(props) {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}
