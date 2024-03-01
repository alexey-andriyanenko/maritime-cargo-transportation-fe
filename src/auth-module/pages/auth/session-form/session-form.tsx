import React, { FormEvent, useEffect, useState } from "react";
import { observer } from "mobx-react-lite";
import {
  Box,
  Button,
  CircularProgress,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
} from "@mui/material";

import { useAuthStore } from "src/auth-module/store";

export const SessionForm: React.FC = observer(() => {
  const authStore = useAuthStore();
  const [companyId, setCompanyId] = useState<number | null>(null);

  useEffect(() => {
    try {
      authStore.getListOfCompanies();
    } catch (e) {
      console.error(e);
    }
  }, []);

  const handleCompanyChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCompanyId(Number(e.target.value));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!companyId) return;

    try {
      await authStore.fulfillSession(companyId);
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <Box
      component="form"
      noValidate
      sx={{ mt: 1 }}
      onSubmit={handleSubmit}
      data-testid="login-via-email-form"
    >
      <FormLabel id="demo-radio-buttons-group-label">
        Select company which you plan to work with
      </FormLabel>

      <RadioGroup name="company-id" value={companyId} onChange={handleCompanyChange}>
        {authStore.companies.map((company) => (
          <FormControlLabel
            key={company.name}
            value={company.id}
            control={<Radio />}
            label={company.name}
          />
        ))}
      </RadioGroup>

      <Button
        type="submit"
        fullWidth
        variant="contained"
        data-testid="submit"
        sx={{ mt: 3, mb: 2 }}
      >
        {false ? (
          <CircularProgress size={24} sx={{ position: "absolute" }} data-testid="loader" />
        ) : (
          "Submit"
        )}
      </Button>
    </Box>
  );
});
