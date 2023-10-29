import { useState } from "react";
import { useForm } from "@mantine/form";
import {
  TextInput,
  Button,
  Box,
  Code,
  Paper,
  Group,
  Select,
  FileInput,
  Title,
  Text,
} from "@mantine/core";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Addbook() {
  const navigate = useNavigate();
  const [submittedValues, setSubmittedValues] = useState("");

  const form = useForm({
    initialValues: {
      name: "",
      author: "",
      type: "",
      picture: "",
    },
    validate: {
      name: (value) => (value.length < 2 ? 'Name must have at least 2 letters' : null),
      author: (value) => (value.length < 2 ? 'author must have at least 2 letters' : null),
    },
  });

  return (
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
            const response = await axios.post(
              "http://localhost/webnovel/member.php",
              {
                name: values.name,
                author: values.author,
                type: values.type,
                picture: values.picture,
              }
            );
            alert("Add book Success");
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
            data={["นิยายตลก", "นิยายแฟนตาซี", "นิยายโรแมนติก", "นิยาย Sci-fi"]}
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

        {submittedValues && <Code block>{submittedValues}</Code>}
      </Paper>
    </Box>
  );
}
