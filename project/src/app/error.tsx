'use client'

import { Button, Container, Group, Text, Title } from '@mantine/core';
import classes from '../styles/ServerError.module.css';
import { useEffect } from 'react';

export default function Error({ error, reset }) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error('Error:', error)
  }, [error])

  return (
    <div className={classes.root}>
      <Container>
        <div className={classes.label}>500</div>
        <Title className={classes.title}>Something bad just happened...</Title>
        <Text size="lg" ta="center" className={classes.description}>
          Our servers could not handle your request. Don&apos;t worry, our development team was
          already notified. Try refreshing the page.
        </Text>
        <Group justify="center">
          <Button variant="white" size="md">
            Refresh the page
          </Button>
        </Group>
      </Container>
    </div>
  )
}
