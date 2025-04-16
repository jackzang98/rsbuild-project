import { Link, Outlet, useLoaderData } from 'react-router-dom';
import type { Contact as ContactType } from '../contact';
import { Button, Divider, Form, Input } from 'antd';

export default function Root() {
  const contacts = useLoaderData() as ContactType[];

  return (
    <div className="flex h-full">
      <div className="w-1/4 bg-[#f7f7f7] pl-4 pr-4 pt-4">
        <Form layout="inline">
          <Form.Item>
            <Input placeholder="Search" className="w-3/4" type="search"></Input>
          </Form.Item>
          <Form.Item name="search">
            <Button type="primary">New</Button>
          </Form.Item>
        </Form>
        <Divider />
        {contacts.length ? (
          <ul>
            {contacts.map((contact) => (
              <li key={contact.id}>
                <Link to={`contacts/${contact.id}`}>
                  {contact.first || contact.last ? (
                    <>
                      {contact.first} {contact.last}
                    </>
                  ) : (
                    <i>No Name</i>
                  )}
                  {contact.favorite && <span>★</span>}
                </Link>
              </li>
            ))}
          </ul>
        ) : (
          <p>
            <i>No contacts</i>
          </p>
        )}
      </div>
      <div className="w-3/4">
        <Outlet></Outlet>
      </div>
    </div>
  );
}
