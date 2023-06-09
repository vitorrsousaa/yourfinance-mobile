import React from 'react';
import { render } from '@testing-library/react-native';

import ThemeProvider from '../../../../components/ThemeProvider';
import formatAmount from '../../../../utils/formatAmout';

import CategorySummary, { ViewModelProps } from './CategorySummary';
import { CategorySummaryViewModel } from './CategorySummary.view-model';

import 'jest-styled-components';

// yarn test CategorySummary.spec.tsx

describe('Category Summary', () => {
  it('Should render correctly category name', () => {
    // Arrange

    // Act
    const rendered = render(
      <ThemeProvider>
        <CategorySummary
          percent={80}
          categoryName="Receitas"
          currentMonth={3}
          difference={200}
        />
      </ThemeProvider>
    );

    // Assert
    expect(rendered.getByText('Receitas'));
  });

  it('Should render correctly current Month', () => {
    // Arrange
    const currentMonth = 4;

    // Act
    const rendered = render(
      <ThemeProvider>
        <CategorySummary
          percent={80}
          categoryName="Receitas"
          currentMonth={currentMonth}
          difference={200}
        />
      </ThemeProvider>
    );

    // Assert
    expect(rendered.getByText(formatAmount(currentMonth)));
  });

  it('Should render correctly difference', () => {
    // Arrange
    const difference = 30;

    // Act
    const rendered = render(
      <ThemeProvider>
        <CategorySummary
          percent={80}
          categoryName="Receitas"
          currentMonth={4}
          difference={difference}
        />
      </ThemeProvider>
    );

    // Assert
    expect(rendered.getByText(formatAmount(difference)));
  });

  it('Should render correctly percent', () => {
    // Arrange
    const percent = 80;

    // Act
    const rendered = render(
      <ThemeProvider>
        <CategorySummary
          percent={percent}
          categoryName="Receitas"
          currentMonth={4}
          difference={200}
        />
      </ThemeProvider>
    );

    // Assert
    expect(rendered.getByText(`${percent}%`));
  });
});

describe('Category Summary View Model', () => {
  it('Should call category name correctly', () => {
    // Arrange
    const dataMock: ViewModelProps = {
      categoryName: 'Receitas',
      currentMonth: 200,
      difference: 150,
      percent: 10,
    };

    // Act
    const viewModel = CategorySummaryViewModel(dataMock);

    // Assert
    expect(viewModel.categoryName).toBe('Receitas');
  });

  it('Should call percent correctly', () => {
    // Arrange
    const dataMock: ViewModelProps = {
      categoryName: 'Receitas',
      currentMonth: 200,
      difference: 150,
      percent: 10,
    };

    // Act
    const viewModel = CategorySummaryViewModel(dataMock);

    // Assert
    expect(viewModel.percent).toBe('10%');
  });

  it('Should call current month correctly', () => {
    // Arrange
    const dataMock: ViewModelProps = {
      categoryName: 'Receitas',
      currentMonth: 200,
      difference: 150,
      percent: 10,
    };

    // Act
    const viewModel = CategorySummaryViewModel(dataMock);

    // Assert
    expect(viewModel.currentMonth).toBe(formatAmount(200));
  });

  it('Should call difference correctly', () => {
    // Arrange
    const dataMock: ViewModelProps = {
      categoryName: 'Receitas',
      currentMonth: 200,
      difference: 150,
      percent: 10,
    };

    // Act
    const viewModel = CategorySummaryViewModel(dataMock);

    // Assert
    expect(viewModel.difference).toBe(formatAmount(150));
  });

  it('Should call getIcon correctly', () => {
    // Arrange
    const dataMock: ViewModelProps = {
      categoryName: 'Receitas',
      currentMonth: 200,
      difference: 150,
      percent: 10,
    };
    const viewModel = CategorySummaryViewModel(dataMock);

    // Act
    const rendered = render(
      <ThemeProvider>{viewModel.getIcon('#000')}</ThemeProvider>
    );

    // Assert
    expect(rendered.getByTestId('trend-up'));
  });
});
