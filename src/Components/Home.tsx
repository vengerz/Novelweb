import { Overlay, Container, Title, Button, Text } from "@mantine/core";
import classes from "./HeroContentLeft.module.css";
import { BrowserRouter, Route, Routes, NavLink } from "react-router-dom";
export function HomeComponent() {
  return (
    <div className={classes.hero}>
      <Overlay
        gradient="linear-gradient(180deg, rgba(0, 0, 0, 0.25) 0%, rgba(0, 0, 0, .65) 40%)"
        opacity={1}
        zIndex={0}
      />
      <Container className={classes.container} size="md" pt={200}>
        <Title className={classes.title}>เว็บทดสอบการบันทึกข้อมูล</Title>
        <Text className={classes.description} size="xl" mt="xl">
          ทดสอบการบันทึกข้อมูลลงฐานข้อมูล
        </Text>
        <NavLink to="/Addbook" className={classes.link}>
          <Button
            variant="gradient"
            gradient={{ from: "blue", to: "teal", deg: 0 }}
            size="xl"
            radius="xl"
            className={classes.control}
          >
            Get started
          </Button>
        </NavLink>
      </Container>
    </div>
  );
}
