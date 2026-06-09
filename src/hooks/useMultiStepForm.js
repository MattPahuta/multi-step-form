/** 
 * ** hook API requirments:
 *    - Needs to answer four questions
 *  1. Which step are we on right now?
 *  2. How does the UI know whether to show 'Back', what to label the forward button,
 *     and whether we're on the last step?
 *  3. How doe navigation happen? What is resposonsible for validating before advancing?
 *    - Hook will handle naviation only
 *    - Component validates before calling goNext
 *  4. What does the hook expose, and what shape does it expose it in?
 */
import { useState, useCallback } from 'react';

function useMultiStepForm(stepCount, initialStep = 0) {
  const [currentStep, setCurrentStep] = useState(initialStep);

  const [completedSteps, setCompletedSteps] = useState(new Set());

  // derived state:
  const isFirstStep = currentStep === 0;
  const isLastStep = currentStep === stepCount - 1;
  const stepNumber = currentStep + 1;
  // ToDo: rename to goForward
  const goNext = useCallback(() => {
    if (isFirstStep) return;
    setCompletedSteps((prev) => new Set(prev).add(currentStep));
    setCurrentStep((prev) => prev + 1);
  }, [currentStep, isLastStep]);

  const goBack = useCallback(() => {
    if (isFirstStep) return;
    setCurrentStep((prev) => prev - 1);
  }, [currentStep, isFirstStep]);

  const goToStep = useCallback((index) => {
    if (index < 0 || index >= stepCount) return;
    setCurrentStep(index);
  }, [stepCount]);

  return {
    currentStep, stepNumber, stepCount, completedSteps, isFirstStep, isLastStep, goNext, goBack, goToStep
  };
  
}

export default useMultiStepForm;