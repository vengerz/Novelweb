import {
  HoverCard,
  Group,
  Button,
  UnstyledButton,
  Text,
  SimpleGrid,
  ThemeIcon,
  Anchor,
  Divider,
  Center,
  Box,
  Burger,
  rem,
  useMantineTheme,
  Paper,
} from "@mantine/core";
import { MantineLogo } from "@mantine/ds";
import { useDisclosure } from "@mantine/hooks";
import {
  IconNotification,
  IconCode,
  IconBook,
  IconChartPie3,
  IconFingerprint,
  IconCoin,
  IconChevronDown,
} from "@tabler/icons-react";
import classes from "./HeaderMegaMenu.module.css";
import { BrowserRouter, Route, Routes, NavLink } from "react-router-dom";
import Addbook from "./Addbook";
import { HomeComponent } from "./Home";
import { Contact } from "./Contact";
import Library from "./Library";
import ViewUserComponent from "./View";
import EditUser from "./Edit";

const mockdata = [
  {
    icon: IconCode,
    title: "Open source",
    description: "This Pokémon’s cry is very loud and distracting",
  },
  {
    icon: IconCoin,
    title: "Free for everyone",
    description: "The fluid of Smeargle’s tail secretions changes",
  },
  {
    icon: IconBook,
    title: "Documentation",
    description: "Yanma is capable of seeing 360 degrees without",
  },
  {
    icon: IconFingerprint,
    title: "Security",
    description: "The shell’s rounded shape and the grooves on its.",
  },
  {
    icon: IconChartPie3,
    title: "Analytics",
    description: "This Pokémon uses its flying ability to quickly chase",
  },
  {
    icon: IconNotification,
    title: "Notifications",
    description: "Combusken battles with the intensely hot flames it spews",
  },
];

export function HeaderMegaMenu() {
  const theme = useMantineTheme();

  const links = mockdata.map((item) => (
    <UnstyledButton className={classes.subLink} key={item.title}>
      <Group wrap="nowrap" align="flex-start">
        <ThemeIcon size={34} variant="default" radius="md">
          <item.icon
            style={{ width: rem(22), height: rem(22) }}
            color={theme.colors.blue[6]}
          />
        </ThemeIcon>
        <div>
          <Text size="sm" fw={500}>
            {item.title}
          </Text>
          <Text size="xs" c="dimmed">
            {item.description}
          </Text>
        </div>
      </Group>
    </UnstyledButton>
  ));

  return (
    <BrowserRouter>
      <Paper shadow="md" radius="xs" p="md">
        <header className={classes.header}>
          <Group justify="space-between" h="100%">
            <Text
              size="xl"
              fw={900}
              variant="gradient"
              gradient={{ from: "blue", to: "teal", deg: 0 }}
            >
              Novel Library
            </Text>

            <Group h="100%" gap={0} visibleFrom="sm">
              <NavLink to="/" className={classes.link}>
                Home
              </NavLink>
              <NavLink to="/library" className={classes.link}>
                Library
              </NavLink>
              <NavLink to="/contact" className={classes.link}>
                Contact
              </NavLink>
            </Group>

            <Group visibleFrom="sm">
              <NavLink to="/Addbook" className={classes.link}>
                <Button
                  variant="gradient"
                  gradient={{ from: "blue", to: "teal", deg: 0 }}
                >
                  Add Books
                </Button>
              </NavLink>
            </Group>
          </Group>
        </header>
      </Paper>
      <Routes>
        <Route path="/" element={<HomeComponent />} />
        <Route path="/Addbook" element={<Addbook />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/library" element={<Library />} />
        <Route path="/library/:id" element={<ViewUserComponent />} />
        <Route path="/edit/:id" element={<EditUser />} />
      </Routes>
    </BrowserRouter>
  );
}
