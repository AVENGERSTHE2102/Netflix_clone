import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import faqsData from '../../fixtures/faqs';
import { Accordion } from '../../components';

describe('<Accordion />', () => {
  it('renders the <Accordion /> with populated data', () => {
    const { container, getByText } = render(
      <Accordion>
        <Accordion.Title>Frequently Asked Questions</Accordion.Title>
        <Accordion.Frame>
          {faqsData.map((item) => (
            <Accordion.Item key={item.id}>
              <Accordion.Header>{item.header}</Accordion.Header>
              <Accordion.Body>{item.body}</Accordion.Body>
            </Accordion.Item>
          ))}
        </Accordion.Frame>
      </Accordion>
    );

    expect(getByText('Frequently Asked Questions')).toBeTruthy();
    expect(getByText('What is Compflix?')).toBeTruthy();
    expect(getByText('How much does Compflix cost?')).toBeTruthy();
    expect(getByText('Where can I watch?')).toBeTruthy();
    expect(getByText('How do I cancel?')).toBeTruthy();
    expect(getByText('What can I watch on Compflix?')).toBeTruthy();
    expect(container.firstChild).toMatchSnapshot();
  });

  it('opens and closes the <Accordion /> component', () => {
    const { container, queryByText } = render(
      <Accordion>
        <Accordion.Title>Frequently Asked Questions</Accordion.Title>
        <Accordion.Frame>
          {faqsData.map((item) => (
            <Accordion.Item key={item.id}>
              <Accordion.Header>{item.header}</Accordion.Header>
              <Accordion.Body data-testid="accordion-body">{item.body}</Accordion.Body>
            </Accordion.Item>
          ))}
        </Accordion.Frame>
      </Accordion>
    );

    const whatIsCompflixBodyText =
      "Compflix is a streaming service that offers a wide variety of award-winning TV programmes, films, anime, documentaries and more – on thousands of internet-connected devices. You can watch as much as you want, whenever you want, without a single advert – all for one low monthly price. There's always something new to discover, and new TV programmes and films are added every week!";

    expect(queryByText(whatIsCompflixBodyText)).toBeFalsy();
    fireEvent.click(queryByText('What is Compflix?'));
    expect(queryByText(whatIsCompflixBodyText)).toBeTruthy();

    fireEvent.click(queryByText('What is Compflix?'));
    expect(queryByText(whatIsCompflixBodyText)).toBeFalsy();
    expect(container.firstChild).toMatchSnapshot();
  });
});
