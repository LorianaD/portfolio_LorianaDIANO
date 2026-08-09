function getTranslatedProject(project, locale) {
    const translation = project.translations?.[locale] || project.translations?.fr || {};

    return {
        ...project,
        ...translation,
        primaryButton: project.primaryButton
            ? {
                  ...project.primaryButton,
                  label: translation.primaryButtonLabel,
              }
            : null,
        secondaryButton: project.secondaryButton
            ? {
                  ...project.secondaryButton,
                  label: translation.secondaryButtonLabel,
              }
            : null,
    };
}

export default getTranslatedProject;