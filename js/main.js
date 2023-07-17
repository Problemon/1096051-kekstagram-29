import './upload-image-form.js';
import { renderPicture } from './render.js';
import { getData } from './api.js';
import { showAlert } from './util.js';

getData()
  .then((cards) => renderPicture(cards))
  .catch((err) => showAlert(err.message));
