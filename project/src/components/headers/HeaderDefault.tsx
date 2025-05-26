"use client"

import { useState } from 'react';

import { Burger, Container, Group, Title } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import classes from './HeaderDefault.module.css';

const links = [
  { link: '/', label: 'Home' },
  { link: '/mantine', label: 'Mantine' },
];

export default function HeaderDefault() {
  const [opened, { toggle }] = useDisclosure(false);
  const [active, setActive] = useState(links[0].link);

  const items = links.map((link) => (
    <a
      key={link.label}
      href={link.link}
      className={classes.link}
      data-active={active === link.link || undefined}
      /*onClick={(event) => {
        event.preventDefault();
        setActive(link.link);
      }}*/
    >
      {link.label}
    </a>
  ));

  return (
    <header className={classes.header}>
      <Container size="md" className={classes.inner}>
        <Title order={1}>UI Library</Title>
        <Group gap={5} visibleFrom="xs">
          {items}
        </Group>

        <Burger opened={opened} onClick={toggle} hiddenFrom="xs" size="sm" />
      </Container>
    </header>
  );
}
