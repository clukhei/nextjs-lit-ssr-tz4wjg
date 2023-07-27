import Head from 'next/head';
import styles from '../styles/Home.module.css';
import '../src/console-overview-template';
import { Button, Form } from '@govtechsg/sgds-react';
export default function Home() {
  return (
    <div className={styles["console-template-container"]}>
    <console-overview-template>
      <span slot="title">Title of Page</span>
      <span slot="action-button">
        <Button slot="action-button" variant="info">
        <i class="bi bi-plus-circle me-2"></i>
          Create new product
        </Button>
      </span>
      <span slot="search">
        <Form>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Search</Form.Label>
            <Form.Control />
          </Form.Group>
        </Form>
      </span>
      <span slot="filter-button">
        <Button variant="outline-dark">
        <i class="bi bi-sliders me-2"></i>
          Refine search
        </Button>
      </span>
      <div slot="body" className={styles["console-over-template__slot_body"]}>
        <h1>Section 1</h1>
      </div>
    </console-overview-template>
    </div>
  );
}
