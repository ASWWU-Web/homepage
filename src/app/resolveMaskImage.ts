import { environment } from '../environments/environment';
import { MEDIA_URI, MEDIA_SM } from './config';

export function resolveMaskImage(photo_URI:string, media_link:string = MEDIA_URI) {
  if (photo_URI) {
    return (media_link + '/' + photo_URI);
  } else {
    return '';
  }
}
