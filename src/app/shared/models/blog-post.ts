import {AuthorEnum}  from '../enums/author.enum';
import * as Firebase from 'firebase/app';

export interface BlogPost {
  header: string;
  subheader: string;
  prettyUrl: string;
  isPublished: boolean; // is the blog in draft state or publicly viewable?
  updatedOn: Firebase.firestore.Timestamp;
  createdOn: Firebase.firestore.Timestamp;
  uid: string;
  author: AuthorEnum;
  previewImage: string;
  content: string;
  youtubeUrl: string;
}
