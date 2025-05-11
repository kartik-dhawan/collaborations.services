import { GraphQLResolveInfo } from 'graphql';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
export type RequireFields<T, K extends keyof T> = Omit<T, K> & { [P in K]-?: NonNullable<T[P]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
};

export type ClientContactDetails = {
  __typename?: 'ClientContactDetails';
  client: ClientDetails;
  clientNotes?: Maybe<Scalars['String']['output']>;
  createdAt: Scalars['String']['output'];
  email?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  phone?: Maybe<Scalars['String']['output']>;
};

export type ClientDetails = {
  __typename?: 'ClientDetails';
  clientContacts: Array<ClientContactDetails>;
  clientNotes?: Maybe<Scalars['String']['output']>;
  collaborations: Array<Collaboration>;
  createdAt: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  instagram?: Maybe<Scalars['String']['output']>;
  name: Scalars['String']['output'];
};

export type Collaboration = {
  __typename?: 'Collaboration';
  client: ClientDetails;
  clientId: Scalars['String']['output'];
  collabNotes?: Maybe<Scalars['String']['output']>;
  collabStatus: CsCollabStatus;
  createdAt: Scalars['String']['output'];
  dealDate?: Maybe<Scalars['String']['output']>;
  deliverableDate?: Maybe<Scalars['String']['output']>;
  deliverableLink?: Maybe<Scalars['String']['output']>;
  deliverableNotes?: Maybe<Scalars['String']['output']>;
  deliverableStatus: CsDeliverableStatus;
  deliverables: Array<CsCollabDeliverables>;
  id: Scalars['ID']['output'];
  name?: Maybe<Scalars['String']['output']>;
  paymentAmount?: Maybe<Scalars['Int']['output']>;
  paymentDate?: Maybe<Scalars['String']['output']>;
  paymentStatus: CsPaymentStatus;
  type: CsCollabType;
  updatedAt?: Maybe<Scalars['String']['output']>;
};

export type CreateClientContactPayload = {
  clientNotes?: InputMaybe<Scalars['String']['input']>;
  createdAt: Scalars['String']['input'];
  email?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
  phone?: InputMaybe<Scalars['String']['input']>;
};

export type CreateClientPayload = {
  clientContacts: Array<CreateClientContactPayload>;
  clientNotes?: InputMaybe<Scalars['String']['input']>;
  createdAt: Scalars['String']['input'];
  instagram?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
};

export type CreateCollaborationPayload = {
  clientPayload: CreateClientPayload;
  collabNotes?: InputMaybe<Scalars['String']['input']>;
  collabStatus: CsCollabStatus;
  createdAt: Scalars['String']['input'];
  dealDate?: InputMaybe<Scalars['String']['input']>;
  deliverableDate: Scalars['String']['input'];
  deliverableLink?: InputMaybe<Scalars['String']['input']>;
  deliverableNotes?: InputMaybe<Scalars['String']['input']>;
  deliverableStatus: CsDeliverableStatus;
  deliverables: Array<CsCollabDeliverables>;
  name?: InputMaybe<Scalars['String']['input']>;
  paymentAmount?: InputMaybe<Scalars['Int']['input']>;
  paymentDate?: InputMaybe<Scalars['String']['input']>;
  paymentStatus: CsPaymentStatus;
  type: CsCollabType;
  updatedAt?: InputMaybe<Scalars['String']['input']>;
};

export type CreateUserPayload = {
  email: Scalars['String']['input'];
  name: Scalars['String']['input'];
  role?: InputMaybe<UserRole>;
};

export enum CsCollabDeliverables {
  CarouselPost = 'CAROUSEL_POST',
  CarouselPostWithoutCollab = 'CAROUSEL_POST_WITHOUT_COLLAB',
  PhotoShoot = 'PHOTO_SHOOT',
  Reel = 'REEL',
  ReelWithoutCollab = 'REEL_WITHOUT_COLLAB',
  SongPromotion = 'SONG_PROMOTION',
  Stories = 'STORIES',
  VideoEdit = 'VIDEO_EDIT'
}

export enum CsCollabStatus {
  Completed = 'COMPLETED',
  DidNotHappen = 'DID_NOT_HAPPEN',
  Finalised = 'FINALISED'
}

export enum CsCollabType {
  BarterCollaboration = 'BARTER_COLLABORATION',
  PaidCollaboration = 'PAID_COLLABORATION',
  PaidGig = 'PAID_GIG',
  PaidPromotion = 'PAID_PROMOTION',
  UnpaidCollaboration = 'UNPAID_COLLABORATION'
}

export enum CsDeliverableStatus {
  Approved = 'APPROVED',
  Cancelled = 'CANCELLED',
  Completed = 'COMPLETED',
  InProgress = 'IN_PROGRESS',
  InReview = 'IN_REVIEW',
  Rejected = 'REJECTED'
}

export enum CsPaymentStatus {
  Paid = 'PAID',
  Pending = 'PENDING',
  Unpaid = 'UNPAID'
}

export enum DeleteStatus {
  Failed = 'FAILED',
  Success = 'SUCCESS'
}

export type DeleteUserResponse = {
  __typename?: 'DeleteUserResponse';
  message: Scalars['String']['output'];
  status: DeleteStatus;
};

export type FetchUserPayload = {
  search?: InputMaybe<Array<UserSearch>>;
  sort?: InputMaybe<UserSorting>;
};

export type Mutation = {
  __typename?: 'Mutation';
  createUser: User;
  csCreateCollaboration: Collaboration;
  deleteAUser: DeleteUserResponse;
  updateUser: User;
};


export type MutationCreateUserArgs = {
  payload: CreateUserPayload;
};


export type MutationCsCreateCollaborationArgs = {
  payload: CreateCollaborationPayload;
};


export type MutationDeleteAUserArgs = {
  id: Scalars['Int']['input'];
};


export type MutationUpdateUserArgs = {
  payload: UpdateUserPayload;
};

export enum OrderBy {
  Asc = 'ASC',
  Desc = 'DESC'
}

export type Query = {
  __typename?: 'Query';
  csGetCollaborations: Array<Collaboration>;
  getAllUsers?: Maybe<Array<User>>;
  getUserById: User;
};


export type QueryGetAllUsersArgs = {
  payload?: InputMaybe<FetchUserPayload>;
};


export type QueryGetUserByIdArgs = {
  id: Scalars['Int']['input'];
};

export type UpdateUserPayload = {
  email?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['Int']['input'];
  name?: InputMaybe<Scalars['String']['input']>;
  role?: InputMaybe<UserRole>;
};

export type User = {
  __typename?: 'User';
  createdAt: Scalars['String']['output'];
  email: Scalars['String']['output'];
  id: Scalars['Int']['output'];
  name: Scalars['String']['output'];
  role?: Maybe<UserRole>;
  updatedAt: Scalars['String']['output'];
};

export enum UserRole {
  Admin = 'ADMIN',
  User = 'USER'
}

export type UserSearch = {
  key: UserSearchFields;
  value: Scalars['String']['input'];
};

export enum UserSearchFields {
  Email = 'email',
  Name = 'name'
}

export type UserSorting = {
  key: UserSearchFields;
  value: OrderBy;
};



export type ResolverTypeWrapper<T> = Promise<T> | T;


export type ResolverWithResolve<TResult, TParent, TContext, TArgs> = {
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};
export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> = ResolverFn<TResult, TParent, TContext, TArgs> | ResolverWithResolve<TResult, TParent, TContext, TArgs>;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => Promise<TResult> | TResult;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => AsyncIterable<TResult> | Promise<AsyncIterable<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<TResult, TKey extends string, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<{ [key in TKey]: TResult }, TParent, TContext, TArgs>;
  resolve?: SubscriptionResolveFn<TResult, { [key in TKey]: TResult }, TContext, TArgs>;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<TResult, TKey extends string, TParent, TContext, TArgs> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<TResult, TKey extends string, TParent = {}, TContext = {}, TArgs = {}> =
  | ((...args: any[]) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<TTypes> | Promise<Maybe<TTypes>>;

export type IsTypeOfResolverFn<T = {}, TContext = {}> = (obj: T, context: TContext, info: GraphQLResolveInfo) => boolean | Promise<boolean>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<TResult = {}, TParent = {}, TContext = {}, TArgs = {}> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;



/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = {
  Boolean: ResolverTypeWrapper<Scalars['Boolean']['output']>;
  ClientContactDetails: ResolverTypeWrapper<ClientContactDetails>;
  ClientDetails: ResolverTypeWrapper<ClientDetails>;
  Collaboration: ResolverTypeWrapper<Collaboration>;
  CreateClientContactPayload: CreateClientContactPayload;
  CreateClientPayload: CreateClientPayload;
  CreateCollaborationPayload: CreateCollaborationPayload;
  CreateUserPayload: CreateUserPayload;
  CsCollabDeliverables: CsCollabDeliverables;
  CsCollabStatus: CsCollabStatus;
  CsCollabType: CsCollabType;
  CsDeliverableStatus: CsDeliverableStatus;
  CsPaymentStatus: CsPaymentStatus;
  DeleteStatus: DeleteStatus;
  DeleteUserResponse: ResolverTypeWrapper<DeleteUserResponse>;
  FetchUserPayload: FetchUserPayload;
  ID: ResolverTypeWrapper<Scalars['ID']['output']>;
  Int: ResolverTypeWrapper<Scalars['Int']['output']>;
  Mutation: ResolverTypeWrapper<{}>;
  OrderBy: OrderBy;
  Query: ResolverTypeWrapper<{}>;
  String: ResolverTypeWrapper<Scalars['String']['output']>;
  UpdateUserPayload: UpdateUserPayload;
  User: ResolverTypeWrapper<User>;
  UserRole: UserRole;
  UserSearch: UserSearch;
  UserSearchFields: UserSearchFields;
  UserSorting: UserSorting;
};

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = {
  Boolean: Scalars['Boolean']['output'];
  ClientContactDetails: ClientContactDetails;
  ClientDetails: ClientDetails;
  Collaboration: Collaboration;
  CreateClientContactPayload: CreateClientContactPayload;
  CreateClientPayload: CreateClientPayload;
  CreateCollaborationPayload: CreateCollaborationPayload;
  CreateUserPayload: CreateUserPayload;
  DeleteUserResponse: DeleteUserResponse;
  FetchUserPayload: FetchUserPayload;
  ID: Scalars['ID']['output'];
  Int: Scalars['Int']['output'];
  Mutation: {};
  Query: {};
  String: Scalars['String']['output'];
  UpdateUserPayload: UpdateUserPayload;
  User: User;
  UserSearch: UserSearch;
  UserSorting: UserSorting;
};

export type ClientContactDetailsResolvers<ContextType = any, ParentType extends ResolversParentTypes['ClientContactDetails'] = ResolversParentTypes['ClientContactDetails']> = {
  client?: Resolver<ResolversTypes['ClientDetails'], ParentType, ContextType>;
  clientNotes?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  email?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  phone?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ClientDetailsResolvers<ContextType = any, ParentType extends ResolversParentTypes['ClientDetails'] = ResolversParentTypes['ClientDetails']> = {
  clientContacts?: Resolver<Array<ResolversTypes['ClientContactDetails']>, ParentType, ContextType>;
  clientNotes?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  collaborations?: Resolver<Array<ResolversTypes['Collaboration']>, ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  instagram?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CollaborationResolvers<ContextType = any, ParentType extends ResolversParentTypes['Collaboration'] = ResolversParentTypes['Collaboration']> = {
  client?: Resolver<ResolversTypes['ClientDetails'], ParentType, ContextType>;
  clientId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  collabNotes?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  collabStatus?: Resolver<ResolversTypes['CsCollabStatus'], ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  dealDate?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  deliverableDate?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  deliverableLink?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  deliverableNotes?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  deliverableStatus?: Resolver<ResolversTypes['CsDeliverableStatus'], ParentType, ContextType>;
  deliverables?: Resolver<Array<ResolversTypes['CsCollabDeliverables']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  paymentAmount?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  paymentDate?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  paymentStatus?: Resolver<ResolversTypes['CsPaymentStatus'], ParentType, ContextType>;
  type?: Resolver<ResolversTypes['CsCollabType'], ParentType, ContextType>;
  updatedAt?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type DeleteUserResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['DeleteUserResponse'] = ResolversParentTypes['DeleteUserResponse']> = {
  message?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  status?: Resolver<ResolversTypes['DeleteStatus'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MutationResolvers<ContextType = any, ParentType extends ResolversParentTypes['Mutation'] = ResolversParentTypes['Mutation']> = {
  createUser?: Resolver<ResolversTypes['User'], ParentType, ContextType, RequireFields<MutationCreateUserArgs, 'payload'>>;
  csCreateCollaboration?: Resolver<ResolversTypes['Collaboration'], ParentType, ContextType, RequireFields<MutationCsCreateCollaborationArgs, 'payload'>>;
  deleteAUser?: Resolver<ResolversTypes['DeleteUserResponse'], ParentType, ContextType, RequireFields<MutationDeleteAUserArgs, 'id'>>;
  updateUser?: Resolver<ResolversTypes['User'], ParentType, ContextType, RequireFields<MutationUpdateUserArgs, 'payload'>>;
};

export type QueryResolvers<ContextType = any, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = {
  csGetCollaborations?: Resolver<Array<ResolversTypes['Collaboration']>, ParentType, ContextType>;
  getAllUsers?: Resolver<Maybe<Array<ResolversTypes['User']>>, ParentType, ContextType, Partial<QueryGetAllUsersArgs>>;
  getUserById?: Resolver<ResolversTypes['User'], ParentType, ContextType, RequireFields<QueryGetUserByIdArgs, 'id'>>;
};

export type UserResolvers<ContextType = any, ParentType extends ResolversParentTypes['User'] = ResolversParentTypes['User']> = {
  createdAt?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  email?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  role?: Resolver<Maybe<ResolversTypes['UserRole']>, ParentType, ContextType>;
  updatedAt?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Resolvers<ContextType = any> = {
  ClientContactDetails?: ClientContactDetailsResolvers<ContextType>;
  ClientDetails?: ClientDetailsResolvers<ContextType>;
  Collaboration?: CollaborationResolvers<ContextType>;
  DeleteUserResponse?: DeleteUserResponseResolvers<ContextType>;
  Mutation?: MutationResolvers<ContextType>;
  Query?: QueryResolvers<ContextType>;
  User?: UserResolvers<ContextType>;
};

