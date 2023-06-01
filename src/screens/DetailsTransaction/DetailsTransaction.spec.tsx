import React from 'react';
import { render } from '@testing-library/react-native';

import ThemeProvider from '../../components/ThemeProvider';
import { TTransaction } from '../../types/Transaction';

import DetailsTransaction from './DetailsTransaction';

import 'jest-styled-components';

// yarn test DetailsTransaction.spec.tsx

describe('DetailsTransaction', () => {
  it('Should render correctly when called with default props', () => {
    // Arrange
    const transactionMocked: TTransaction = {
      amount: 0,
      category: { id: '123', name: 'Testing' },
      createdAt: new Date(),
      date: new Date(),
      description: 'testing',
      id: '',
      modality: { category: '', id: '', name: 'Modality' },
      type: 'Fixo',
      updatedAt: new Date(),
    };
    const rendered = render(
      <ThemeProvider>
        <DetailsTransaction
          route={{
            name: 'DetailsTransaction',
            key: 'Details',
            params: { transaction: transactionMocked },
          }}
        />
      </ThemeProvider>
    );

    // Act

    // Assert
    expect(true).toBeTruthy();
  });
});
