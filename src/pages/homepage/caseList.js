import React from 'react';
import { Box, Typography, Grid, Card, CardContent, Button } from '@mui/material';

const caseData = [
  {
    title: 'Bank Robbery in Downtown',
    description: 'A detailed report about a daylight robbery involving multiple suspects.',
  },
  {
    title: 'Missing Person Case',
    description: 'An investigation into a missing college student last seen on campus.',
  },
  {
    title: 'Cyber Fraud Investigation',
    description: 'Ongoing investigation into a phishing scam targeting senior citizens.',
  },
];

const CaseListSection = () => {
  return (
    <Box id="case-list" sx={{ py: 8, px: 2, backgroundColor: '#f5f5f5' }}>
      <Typography variant="h4" align="center" gutterBottom fontWeight="bold">
        Recent Cases
      </Typography>

      <Grid container spacing={4} justifyContent="center">
        {caseData.map((caseItem, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column', boxShadow: 3 }}>
              <CardContent>
                <Typography variant="h6" gutterBottom fontWeight="medium">
                  {caseItem.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {caseItem.description}
                </Typography>
              </CardContent>
              <Box sx={{ flexGrow: 1 }} />
              <Box sx={{ p: 2, pt: 0 }}>
                <Button variant="contained" fullWidth>
                  View Details
                </Button>
              </Box>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default CaseListSection;
