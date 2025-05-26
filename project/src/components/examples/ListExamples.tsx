"use client";

import { IconHeart } from '@tabler/icons-react';
import { ActionIcon, Badge, Button, Card, Container, Grid, Group, Image, Text, Title } from '@mantine/core';
import classes from './Cards.module.css';

const examples = [
  {
    id: 'contact-form',
    title: 'Form',
    description: 'Interactive form with real-time validation, loading states, and success animations',
    image: "/ballpoint-510x640.png",
    tags: ['Forms', 'Validation', 'Animation'],
    route: '/examples/form'
  },
  {
    id: 'carousel',
    title: 'Carousel',
    description: 'Carousels with cards',
    image: "/carousel-640x437.png",
    tags: ['Image', 'Carousel', 'Animation'],
    route: '/examples/carousel'
  },
]

export default function ListExamples({}) {

  return (
    <Container my="md">
      <Grid>
        {examples.map((example, index) => {
          const { image, title, description, route, tags } = example;
          const list_tags = tags.map((tag, index_tag) => <Badge key={`example-${index}-badge-${index_tag}`}>{tag}</Badge>)
          return (
            <Grid.Col key={`example-${index}`} span={{ base: 12, xs: 6 }}>
              <Card withBorder radius="md" p="md" className={classes.card}>
                <Card.Section className={classes.section} mt="md">
                  <Group justify="apart">
                    <Title fw={500} order={2} align>
                      {title}
                    </Title>
                  </Group>
                  <Text fz="sm" mt="xs">
                    {description}
                  </Text>
                </Card.Section>

                <Card.Section>
                  <Image src={image} alt={title} height={240} />
                </Card.Section>

                <Card.Section className={classes.section}>
                  <Text mt="md" className={classes.label} c="dimmed">
                    Perfect for you, if you enjoy
                  </Text>
                  <Group gap={7} mt={5}>
                    {list_tags}
                  </Group>
                </Card.Section>

                <Group mt="xs">
                  <Button radius="md" style={{ flex: 1 }} component="a" href={route}>
                    Show details
                  </Button>
                </Group>
              </Card>
            </Grid.Col>
          )}
        )}
      </Grid>
    </Container>
  );
}
