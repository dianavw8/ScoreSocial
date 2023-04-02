import React, { useState } from 'react';
import { Button, Form, Grid, Header, Image, Message, Segment } from 'semantic-ui-react';
import { useMutation } from '@apollo/client';

const subscriptionObserver = client.subscribe({
    query: subscription,
    variables: { userId: friendUserId }
  }).subscribe({
    next: (data) => {
      // will notify user when friend appears online
      console.log('Friend is now online:', data)
    },
    error: (err) => console.error(err),
  })