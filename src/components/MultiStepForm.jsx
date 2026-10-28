import { useState, useEffect, useRef } from "react";
import { useMultiStepForm } from "../hooks/useMultiStepForm";
import styles from "./MultiStepForm.module.css";

const STEPS = [
  { id: "personal-info", label: "Your info" },
  { id: "select-plan", label: "Select plan" },
  { id: "add-ons", label: "add-ons" },
  { id: "summary", label: "summary " },
];

const INITIAL_FORM_DATA = {
  name: "",
  email: "",
  phone: "",
  plan: "arcade",
  billing: "monthly",
  addOns: {
    onlineService: false,
    largerStorage: false,
    customizableProfile: false,
  },
};

function MultiStepForm() {
  const {
    currentStep,
    stepNumber,
    stepCount,
    completedSteps,
    isFirstStep,
    isLastStep,
    goNext,
    goBack,
    goToStep,
  } = useMultiStepForm(STEPS.length); // stepCount is STEPS.length

  const [formData, setFormData] = useState(INITIAL_FORM_DATA);
  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  // focus management
  const stepHeadingRef = useRef(null);

  useEffect(() => {
    if (stepHeadingRef.current) {
      stepHeadingRef.current.focus();
    }
  }, [currentStep]);

  // --- field updater function
  function updateField(field, value) {
    setFormData((prev) => ({ ...prev, [field]: value }));
    // *** ToDo: Explain this code
    setErrors((prev) => {
      const next = { ...prev };
      delete next[field];
      return next;
    });
  }

  // --- function to more clearly update add-ons
  function updateAddOn(key, value) {
    setFormData((prev) => ({
      ...prev,
      addOns: { ...prev.addOns, [key]: value },
    }));
  }

  // ** Navigation handlers
  // next 
  function handleNext() {
    // ToDo:
    goNext();
  }

  // back
  function handleBack() {
    setErrors({});
    goBack();
  }

  // go to a specific step
  function handleGoToStep(index) {
    setErrors({});
    goToStep(index);
  }

  // handle form submit
  function handleSubmit(e) {
    e.preventDefault();

    console.log('Form submitted:', formData);
    setIsSubmitted(true);
  }



  // --- RENDER ---
  return (
    <form
      className=""
      aria-label="Multi-step sign-up form"
      noValidate
      onSubmit={handleSubmit}>
      {/* Sidebar placeholder - ToDo: replace w/ <Sidebac /> */}
      <aside>
        <p>
          Sidebar placeholder - Step {stepNumber} of {stepCount}
        </p>
      </aside>
      <div>Form goes here</div>
    </form>
  );
}

export default MultiStepForm;
