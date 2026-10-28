# Multi-Step Form

A responsive multi-step form built with React and styled using Tailwind CSS.

![project screenshot]()

## Table of Contents

- [Overview](#overview)
  - [Features](#features)
  - [Tech Stack](#tech-stack)
  - [Project Structure](#project-structure)
- [Architecture & Key Decisions](#architecture--key-decisions)
  - [Component Design](#component-design)
  - [State Management](#state-management)
  - [Utility Functions](#utility-functions)
  - [Theme System](#theme-system)
  - [Accessibility](#accessibility)
- [Data Flow](#data-flow)
- [Author](#author)

## Overview

This is a solution to the [Multi-step form challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/multistep-form-YVAnSdqQBJ). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

### Features

Users should be able to:

- Complete each step of the sequence
- Go back to a previous step to update their selections
- See a summary of their selections on the final step and confirm their order
- View the optimal layout for the interface depending on their device's screen size
- See hover and focus states for all interactive elements on the page
- Receive form validation messages if:
  - A field has been missed
  - The email address is not formatted correctly
  - A step is submitted, but no selection has been made

### Links

- Solution URL: [Add solution URL here](https://your-solution-url.com)
- Live Site URL: [Add live site URL here](https://your-live-site-url.com)

### Tech Stack

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow
- [React](https://reactjs.org/) - JS library

### Project Structure

## Architecture & Key Decisions

**High Level Concepts**
- Components handle the UI
- Utility functions handle the text analysis
- State lives at the level where it is needed

Keep derived data out of state whenever possible - Core React concept

`useMultiStepForm` Custom Hook drives the form's navigation;
- completedSteps uses a `Set` rather than an array because this is a collection of unique values, not an ordered list
- `useCallback` wraps the navigation functions. Without useCallback, every render of the form creates new function references for `goForward`, `goBack`, and `goToStep`, preventing unnecessary re-renders. The function reference is stable between renders unless its dependenices change.
- The hook returns an object instead of an array for clearer named returns.

### Component Design

### State Management

### Utility Functions

### Theme System

### Accessibility

## Data Flow

## AI Collaboration

Describe how you used AI tools (if any) during this project. This helps demonstrate your ability to work effectively with AI assistants.

- What tools did you use (e.g., ChatGPT, Claude, GitHub Copilot)?
- How did you use them (e.g., debugging, generating boilerplate, brainstorming solutions)?
- What worked well? What didn't?


## Author

- Website - [Matt Pahuta](https://www.mattpahuta.dev)
- Frontend Mentor - [@mattpahuta](https://www.frontendmentor.io/profile/MattPahuta)
- LinkedIn - [Matt Pahuta](www.linkedin.com/in/mattpahuta)