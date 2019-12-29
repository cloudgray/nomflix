import React from "react";
import Proptypes from "prop-types";
import styled from "styled-components";
import Section from "Components/Section";
import Message from "Components/Message";

const Container = styled.div`
  padding: 0px 20px;
`;

const TVPresenter = ({ topRated, popular, airingToday, loading, error }) =>
  loading ? null : (
    <Container>
      {topRated && topRated.length > 0 && (
        <Section title="Top Rated Shows">
          {topRated.map(show => show.name)}
        </Section>
      )}
      {popular && popular.length > 0 && (
        <Section title="Upcoming Movies">
          {popular.map(show => show.name)}
        </Section>
      )}
      {airingToday && airingToday.length > 0 && (
        <Section title="Popular Shows">
          {airingToday.map(show => show.name)}
        </Section>
      )}
      {error && <Message color="#e74c3c" text={error} />}
    </Container>
  );

TVPresenter.props = {
  topRated: Proptypes.array,
  popular: Proptypes.array,
  airingToday: Proptypes.array,
  loading: Proptypes.bool.isRequired,
  error: Proptypes.string
};

export default TVPresenter;
