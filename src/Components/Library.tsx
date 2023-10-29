import {
  Container,
  Table,
  Image,
  Group,
  ActionIcon,
  Text,
  Title,
} from "@mantine/core";
import React, { useEffect, useState } from "react";
import axios from "axios";
import {
  IconEdit,
  IconEye,
  IconSettings,
  IconTrash,
  IconUser,
} from "@tabler/icons-react";
import { ModalsProvider, modals } from "@mantine/modals";
import { Link } from "react-router-dom";

function Library() {
  const [clients, setClients] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost/webnovel/member.php")
      .then((response) => {
        // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
        setClients(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  console.log(clients);
  const rows = clients.map((element) => (
    <tr key={element.id}>
      <td>{element.id}</td>
      <td>{element.name}</td>
      <td>{element.type}</td>
      <td>
        <Image
          radius="md"
          h={100}
          width={150}
          fit="contain"
          src={element.picture}
          fallbackSrc="https://placehold.co/600x400?text=Placeholder"
        />
      </td>
      <td>{element.time}</td>
      <td>
        <Group>
          <Link to={`/library/${element.id}`}>
            <ActionIcon color="blue" variant="outline">
              <IconEye size="1rem" />
            </ActionIcon>
          </Link>

          <Link to={`/edit/${element.id}`}>
            <ActionIcon variant="outline" color="green">
              <IconEdit size="1rem" />
            </ActionIcon>
          </Link>

          <ActionIcon
            variant="outline"
            color="red"
            onClick={() => openDeleteModal(element.id)}
          >
            <IconTrash size="1rem" />
          </ActionIcon>
        </Group>
      </td>
    </tr>
  ));
  const openDeleteModal = (id: any) =>
    modals.openConfirmModal({
      title: "Delete your profile",
      centered: true,
      children: <Text size="sm">คุณต้องการลบรายการนี้หรือไม่ ? id: {id}</Text>,
      labels: { confirm: "Delete account", cancel: "No don't delete it" },
      confirmProps: { color: "red" },
      onCancel: () => console.log("Cancel"),
      // eslint-disable-next-line @typescript-eslint/no-misused-promises
      onConfirm: async () => {
        const res = await axios.delete(
          `http://localhost/webnovel/member.php?id=${id}`
        );
        location.replace("/library");
      },
    });
  return (
    <>
      <ModalsProvider labels={{ confirm: "Submit", cancel: "Cancel" }}>
        <Text ta={"center"} pt={20} fz={50} pb={20}>รายชื่อหนังสือ</Text>
        <Container ta={"center"} maw={1200}>
          <Table>
            <thead>
              <tr>
                <td>ID</td>
                <td>ชื่อนิยาย</td>
                <td>ประเภท</td>
                <td>รูปประกอบ</td>
                <td>time</td>
              </tr>
            </thead>
            <tbody>{rows}</tbody>
          </Table>
        </Container>
      </ModalsProvider>
    </>
  );
}

export default Library;
