export const errorResponse = (error: any) => {
  return {
    statusCode:
      error?.response?.status || error.statusCode || error.status || 400,
    message:
      error.message ||
      error?.response?.message ||
      error.response?.data?.message,
    error: error.name || error,
    data: null,
  };
};

export const successResponse = (
  data: object,
  message: string,
  statusCode?: number,
) => {
  return {
    statusCode: statusCode || 200,
    message: message,
    data: data,
    error: null,
  };
};

export const API_REQUEST = {
  DUMP_DATA: '/dumpData',
  SEARCH_MOVIES: '/searchMovies',
}

export const INJECT_MODEL = {
  MOVIE: 'Movie'
}
