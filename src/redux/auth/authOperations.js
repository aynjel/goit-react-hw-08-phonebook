import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import Notiflix from 'notiflix';

// set base url for axios
axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

// Utility to add JWT
const setAuthHeader = token => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

// Utility to remove JWT
const clearAuthHeader = () => {
  axios.defaults.headers.common.Authorization = '';
};

export const register = createAsyncThunk(
  'auth/register',
  async ({ name, email, password }, thunkAPI) => {
    try {
      const response = await axios.post('/users/signup', {
        name,
        email,
        password,
      });
      setAuthHeader(response.data.token);
      Notiflix.Notify.success('Registered successfully', {
        position: 'right-bottom',
      });
      return response.data;
    } catch (error) {
      Notiflix.Notify.failure(error.message, {
        position: 'right-bottom',
      });
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const login = createAsyncThunk(
  'auth/login',
  async ({ email, password }, thunkAPI) => {
    try {
      const response = await axios.post('/users/login', {
        email,
        password,
      });
      setAuthHeader(response.data.token);
      Notiflix.Notify.success('Logged in successfully', {
        position: 'right-bottom',
      });
      return response.data;
    } catch (error) {
      Notiflix.Notify.failure('Invalid credentials', {
        position: 'right-bottom',
      });
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

/*
 * POST @ /users/logout
 * headers: Authorization: Bearer token
 */
export const logOut = createAsyncThunk('auth/logout', async (_, thunkAPI) => {
  try {
    await axios.post('/users/logout');
    clearAuthHeader();
    Notiflix.Notify.success('Logged out successfully', {
      position: 'right-bottom',
    });
  } catch (error) {
    Notiflix.Notify.failure(error.message, {
      position: 'right-bottom',
    });
    return thunkAPI.rejectWithValue(error.message);
  }
});

/*
 * GET @ /users/current
 * headers: Authorization: Bearer token
 */
export const refreshUser = createAsyncThunk(
  'auth/refresh',
  async (_, thunkAPI) => {
    // Reading the token from the state via getState()
    const state = thunkAPI.getState();
    const persistedToken = state.auth.token;

    if (persistedToken === null) {
      // If there is no token, exit without performing any request
      return thunkAPI.rejectWithValue('Unable to fetch user');
    }

    try {
      // If there is a token, add it to the HTTP header and perform the request
      setAuthHeader(persistedToken);
      const res = await axios.get('/users/current');
      return res.data;
    } catch (error) {
      Notiflix.Notify.failure(error.message, {
        position: 'right-bottom',
      });
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
