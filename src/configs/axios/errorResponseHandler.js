import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function errorResponseHandler(error) {
  if (error) {
    let errMessage;
    if (error.response) {
      if (error.response.status === 404) errMessage = 'Something went wrong';
      else errMessage = error.response.errMessage;

      console.log(errMessage);

      toast(errMessage);

      return Promise.reject(error);
    }
  }
}

export default errorResponseHandler;
