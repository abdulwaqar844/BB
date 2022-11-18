import { useMutation } from "@apollo/client";
import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import CREATE_NEW_HABIT from "../lib/apollo/mutations/createHabit";
import GET_ALL_USER_HABIT from "../lib/apollo/queries/getHabits";
function EditHabit({ habit, status, HanldeShowModal }) {
  const [habitTitle, setHabitTitle] = useState("");
  const [starred, setStarred] = useState(false);
  const [err, setErr] = useState(false);
  const [habitDescription, setHabitDescription] = useState("");
  const handleClose = () => HanldeShowModal(false);
  const [createHabit, { data, loading, error }] = useMutation(
    CREATE_NEW_HABIT,
    {
      refetchQueries: [GET_ALL_USER_HABIT],
    }
  );
  const handleSubmit = (e) => {
    if (habitTitle === "") {
      setErr(true);
      return;
    } else if (habitDescription === "") {
      setErr(true);
      return;
    }
    e.preventDefault();
    setHabitDescription("");
    setHabitTitle("");
    createHabit({
      variables: {
        title: habitTitle,
        description: habitDescription,
        userID: "OekgvAyGIbRoEBYZAOZJOTm8JaA3",
        starred: starred,
      },
    });
    setErr(false);
    HanldeShowModal(false);
  };

  return (
    <>
      <Modal show={status} onHide={handleClose}>
        <Modal.Header>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Habit Title</Form.Label>
              <Form.Control
                onChange={(e) => setHabitTitle(e.target.value)}
                type="text"
                placeholder="Title"
                autoFocus
                defaultValue={habit.title}
              />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Description</Form.Label>
              <Form.Control
                as="textarea"
                defaultValue={habit.description}
                rows={3}
                onChange={(e) => setHabitDescription(e.target.value)}
              />
            </Form.Group>

            <Form.Check
              type="switch"
              id="custom-switch"
              label="Starred"
              name="starrted"
              defaultValue={habit.starred}
              onChange={(e) => setStarred(e.target.checked)}
            />
          </Form>
          {err ? (
            <p className="text-danger">Title and Description is Required</p>
          ) : (
            ""
          )}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={handleSubmit}>
            Update Habit
          </Button>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default EditHabit;
