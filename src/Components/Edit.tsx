import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import {
  Avatar,
  Box,
  Button,
  Card,
  Container,
  Group,
  NumberInput,
  Paper,
  PasswordInput,
  Select,
  Text,
  TextInput,
} from "@mantine/core";
import { IconAt, IconPhoneCall, IconUserCircle } from "@tabler/icons-react";
import { useForm, yupResolver } from "@mantine/form";
import { useNavigate } from "react-router-dom";
import * as Yup from "yup";

function EditUser() {
  const navigate = useNavigate();

  const { id } = useParams();
  console.log(id);
  const [datauser, setDatauser] = useState<any>([]);
  const getData = async (uid: any) => {
    const res = await axios.get(
      `http://localhost/webnovel/member.php?id=${uid}`
    );
    form.setValues(res.data);
  };
  useEffect(() => {
    getData(id);
  }, [id]);

  const schema = Yup.object().shape({
    name: Yup.string(),
    author: Yup.string(),
    type: Yup.string(),
    picture: Yup.string(),
  });
  const form = useForm({
    validate: yupResolver(schema),
  });

  return (
    <>
      <Box maw={500} mx="auto" pt={100}>
        <Text
          fz={30}
          fw={900}
          ta={"center"}
          variant="gradient"
          gradient={{ from: "blue", to: "teal", deg: 0 }}
        >
          บันทึกข้อมูลนิยาย
        </Text>
        <Paper shadow="sm" p={"md"}>
          <form
            onSubmit={form.onSubmit(async (values) => {
              const response = await axios.put(
                "http://localhost/webnovel/member.php",
                {
                  id: id,
                  name: values.name,
                  author: values.author,
                  type: values.type,
                  picture: values.picture,
                }
              );
              alert("Edit Success");
              navigate("/library"); //กลับไปหน้า client
            })}
          >
            <TextInput
              withAsterisk
              label="ชื่อนิยาย"
              placeholder="ทดสอบชื่อ"
              {...form.getInputProps("name")}
            />
            <TextInput
              withAsterisk
              label="ผู้แต่ง"
              placeholder="ชื่อ - สกุล"
              mt="md"
              {...form.getInputProps("author")}
            />
            <Select
              label="ประเภท"
              placeholder="เลือกประเภท"
              data={[
                "นิยายตลก",
                "นิยายแฟนตาซี",
                "นิยายโรแมนติก",
                "นิยาย Sci-fi",
              ]}
              searchable
              {...form.getInputProps("type")}
            />
            <TextInput
              label="Picture"
              placeholder="URL"
              mt="md"
              {...form.getInputProps("picture")}
            />
            <Group justify="center">
              <Button
                type="submit"
                mt="md"
                variant="gradient"
                gradient={{ from: "blue", to: "teal", deg: 0 }}
              >
                เพิ่ม
              </Button>
            </Group>
          </form>
        </Paper>
      </Box>
    </>
  );
}

export default EditUser;
