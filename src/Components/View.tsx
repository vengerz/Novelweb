import { Box, Center, Container, Group, Image, Text } from "@mantine/core";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function ViewUserComponent() {
  const { id } = useParams();
  const [clients, setClients] = useState([]);
  const getData = async (uid: any) => {
    const res = await axios.get(
      `http://localhost/webnovel/member.php?id=${uid}`
    );
    setClients(res.data);
  };

  useEffect(() => {
    getData(id);
  }, [id]);

  console.log(clients);

  const name = clients.name;
  const author = clients.author;
  const type = clients.type;
  const picture = clients.picture;
  return (
    <Container>
      <Group mt={50}>
        <Image
          fallbackSrc="https://placehold.co/600x400?text=Placeholder"
          maw={200}
          mx={"auto"}
          fit="contain"
          src={picture}
        />
      </Group>
      <Group>
        <Center maw={200} h={100} mx="auto">
          ID : {id} <br />
          Name : {name} <br />
          Author : {author} <br />
          Type : {type}
        </Center>
      </Group>
    </Container>
  );
}

export default ViewUserComponent;
