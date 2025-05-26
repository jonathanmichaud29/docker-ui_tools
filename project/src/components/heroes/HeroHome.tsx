import { Button, Container, Text, Title } from '@mantine/core';
import { Dots } from '../svgs/Dots';
import classes from './HeroHome.module.css';

export default function HeroHome() {
  return (
    <Container className={classes.wrapper} size={1400}>
      <Dots className={classes.dots} style={{ left: 0, top: 0 }} />
      <Dots className={classes.dots} style={{ left: 60, top: 0 }} />
      <Dots className={classes.dots} style={{ left: 0, top: 140 }} />
      <Dots className={classes.dots} style={{ right: 0, top: 60 }} />

      <div className={classes.inner}>
        <Title className={classes.title}>
          Fine-tuning{' '}
          <Text component="span" className={classes.highlight} inherit>
            UI Components
          </Text>{' '}
          for quick development
        </Title>

        <Container p={0} size={600}>
          <Text size="lg" c="dimmed" className={classes.description}>
            Testing Mantine UI Stack with NextJS, React and SaSS.
          </Text>
        </Container>

        {/* <div className={classes.controls}>
          <Button className={classes.control} size="lg" variant="default" color="gray">
            Book a demo
          </Button>
          <Button className={classes.control} size="lg">
            Purchase a license
          </Button>
        </div> */}
      </div>
    </Container>
  );
}
