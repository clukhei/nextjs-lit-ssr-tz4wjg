import Head from 'next/head';
// using css for template layout stylings
import 'clk-css-templates/css/console.css';
// using sgds-react library for the components
import { Button, Form } from '@govtechsg/sgds-react';

export default function Home() {
  return (
    <console-template-overview>
      <template-header>
        <template-header-top>
          <h1 className="title">Title of Page</h1>
          <Button variant="info">
            <i className="bi bi-plus-circle me-2"></i>Create new project
          </Button>
        </template-header-top>
        <template-header-bottom>
          <Form>
            <Form.Group
              classNameName="mb-3"
              controlId="exampleForm.ControlInput1"
            >
              <Form.Label>Search</Form.Label>
              <Form.Control />
            </Form.Group>
          </Form>
          <Button variant="outline-dark">
            {' '}
            <i className="bi bi-sliders me-2"></i>
            Refine search
          </Button>
        </template-header-bottom>
      </template-header>
      <template-body>
        <body-section-one>
          <h1>Section 1</h1>
        </body-section-one>
      </template-body>
    </console-template-overview>
  );
}
