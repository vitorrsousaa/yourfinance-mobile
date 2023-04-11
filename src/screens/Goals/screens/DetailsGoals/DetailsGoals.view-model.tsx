export interface DetailsGoalsViewModelProps {
  handleRemoveGoal: () => void;
}

export function DetailsGoalsViewModel() {
  function handleRemoveGoal() {
    console.log(
      'clicando para remover a meta- dentro da detailsGoalsViewmodel'
    );
  }

  return {
    handleRemoveGoal,
  };
}
