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

export type AssignPermissionsPayload = {
  permissions: Array<PermissionValue>;
  role?: InputMaybe<UserRole>;
};

export type Collaboration = {
  __typename?: 'Collaboration';
  client: CsClientSummary;
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
  isMine?: Maybe<Scalars['Boolean']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  paymentAmount?: Maybe<Scalars['Int']['output']>;
  paymentDate?: Maybe<Scalars['String']['output']>;
  paymentStatus: CsPaymentStatus;
  type: CsCollabType;
  updatedAt?: Maybe<Scalars['String']['output']>;
  user?: Maybe<UserProfile>;
};

export type CreateClientContactPayload = {
  clientNotes?: InputMaybe<Scalars['String']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  gender?: InputMaybe<CsGender>;
  name: Scalars['String']['input'];
  phone?: InputMaybe<Scalars['String']['input']>;
};

export type CreateClientPayload = {
  clientContacts: Array<CreateClientContactPayload>;
  clientNotes?: InputMaybe<Scalars['String']['input']>;
  instagram?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
};

export type CreateCollaborationPayload = {
  clientId?: InputMaybe<Scalars['ID']['input']>;
  clientPayload?: InputMaybe<CreateClientPayload>;
  collabNotes?: InputMaybe<Scalars['String']['input']>;
  collabStatus: CsCollabStatus;
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
};

export type CreateUserPayload = {
  email: Scalars['String']['input'];
  name: Scalars['String']['input'];
  password: Scalars['String']['input'];
  role?: InputMaybe<UserRole>;
};

export type CsClientContactDetails = {
  __typename?: 'CsClientContactDetails';
  clientNotes?: Maybe<Scalars['String']['output']>;
  createdAt: Scalars['String']['output'];
  email?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  isMine?: Maybe<Scalars['Boolean']['output']>;
  name: Scalars['String']['output'];
  phone?: Maybe<Scalars['String']['output']>;
  user?: Maybe<UserProfile>;
};

export type CsClientSummary = {
  __typename?: 'CsClientSummary';
  clientContacts: Array<CsClientContactDetails>;
  clientNotes?: Maybe<Scalars['String']['output']>;
  createdAt: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  instagram?: Maybe<Scalars['String']['output']>;
  isMine?: Maybe<Scalars['Boolean']['output']>;
  name: Scalars['String']['output'];
  user?: Maybe<UserProfile>;
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

export enum CsGender {
  Female = 'FEMALE',
  Male = 'MALE',
  Other = 'OTHER',
  PreferNotToSay = 'PREFER_NOT_TO_SAY'
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
  pagination: PaginationInput;
  search?: InputMaybe<Array<UserSearch>>;
  sort?: InputMaybe<UserSorting>;
};

export type Mutation = {
  __typename?: 'Mutation';
  createUser: User;
  csCreateClient: CsClientSummary;
  csCreateCollaboration: Collaboration;
  csEditCollaboration: Collaboration;
  deleteAUser: DeleteUserResponse;
  umsAssignPermissionsToRole: PermissionsResponse;
  umsSignUp: SignInResponse;
  updateUser: User;
};


export type MutationCreateUserArgs = {
  payload: CreateUserPayload;
};


export type MutationCsCreateClientArgs = {
  payload: CreateClientPayload;
};


export type MutationCsCreateCollaborationArgs = {
  payload: CreateCollaborationPayload;
};


export type MutationCsEditCollaborationArgs = {
  payload?: InputMaybe<UpdateCollaborationPayload>;
};


export type MutationDeleteAUserArgs = {
  id: Scalars['Int']['input'];
};


export type MutationUmsAssignPermissionsToRoleArgs = {
  payload: AssignPermissionsPayload;
};


export type MutationUmsSignUpArgs = {
  payload: CreateUserPayload;
};


export type MutationUpdateUserArgs = {
  payload: UpdateUserPayload;
};

export enum OrderBy {
  Asc = 'ASC',
  Desc = 'DESC'
}

export type PaginationInput = {
  pageNumber: Scalars['Int']['input'];
  pageSize: Scalars['Int']['input'];
};

export enum PermissionValue {
  AssignPermissions = 'ASSIGN_PERMISSIONS',
  CreateClient = 'CREATE_CLIENT',
  CreateCollaboration = 'CREATE_COLLABORATION',
  CreateNewUser = 'CREATE_NEW_USER',
  DeleteAUser = 'DELETE_A_USER',
  EditCollaboration = 'EDIT_COLLABORATION',
  ReadClientData = 'READ_CLIENT_DATA',
  ReadCollaboraionsData = 'READ_COLLABORAIONS_DATA',
  ReadUserData = 'READ_USER_DATA',
  ReadUserDataById = 'READ_USER_DATA_BY_ID',
  UpdateUser = 'UPDATE_USER'
}

export type PermissionsResponse = {
  __typename?: 'PermissionsResponse';
  permissions: Array<PermissionValue>;
  role?: Maybe<UserRole>;
  totalCount?: Maybe<Scalars['Int']['output']>;
};

export type Query = {
  __typename?: 'Query';
  csGetClients: Array<CsClientSummary>;
  csGetCollaborations: Array<Collaboration>;
  getAllUsers?: Maybe<Array<User>>;
  getUserById: User;
  umsGetUserPermissions: PermissionsResponse;
  umsLogin: SignInResponse;
};


export type QueryGetAllUsersArgs = {
  payload?: InputMaybe<FetchUserPayload>;
};


export type QueryGetUserByIdArgs = {
  id: Scalars['Int']['input'];
};


export type QueryUmsGetUserPermissionsArgs = {
  userId: Scalars['Int']['input'];
};


export type QueryUmsLoginArgs = {
  payload: UserLoginPayload;
};

export type SignInResponse = {
  __typename?: 'SignInResponse';
  message?: Maybe<Scalars['String']['output']>;
  token: Scalars['String']['output'];
  user: User;
};

export type UpdateCollabClientPayload = {
  clientNotes?: InputMaybe<Scalars['String']['input']>;
  instagram?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
};

export type UpdateCollaborationPayload = {
  clientPayload?: InputMaybe<UpdateCollabClientPayload>;
  collabNotes?: InputMaybe<Scalars['String']['input']>;
  collabStatus?: InputMaybe<CsCollabStatus>;
  dealDate?: InputMaybe<Scalars['String']['input']>;
  deliverableDate?: InputMaybe<Scalars['String']['input']>;
  deliverableLink?: InputMaybe<Scalars['String']['input']>;
  deliverableNotes?: InputMaybe<Scalars['String']['input']>;
  deliverableStatus?: InputMaybe<CsDeliverableStatus>;
  deliverables?: InputMaybe<Array<CsCollabDeliverables>>;
  id: Scalars['ID']['input'];
  name?: InputMaybe<Scalars['String']['input']>;
  paymentAmount?: InputMaybe<Scalars['Int']['input']>;
  paymentDate?: InputMaybe<Scalars['String']['input']>;
  paymentStatus?: InputMaybe<CsPaymentStatus>;
  type?: InputMaybe<CsCollabType>;
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
  permissions: Array<PermissionValue>;
  role?: Maybe<UserRole>;
  updatedAt: Scalars['String']['output'];
};

export type UserLoginPayload = {
  email: Scalars['String']['input'];
  password: Scalars['String']['input'];
};

export type UserProfile = {
  __typename?: 'UserProfile';
  email: Scalars['String']['output'];
  id: Scalars['Int']['output'];
  name: Scalars['String']['output'];
  role?: Maybe<UserRole>;
};

export enum UserRole {
  Admin = 'ADMIN',
  Support = 'SUPPORT',
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
  AssignPermissionsPayload: AssignPermissionsPayload;
  Boolean: ResolverTypeWrapper<Scalars['Boolean']['output']>;
  Collaboration: ResolverTypeWrapper<Collaboration>;
  CreateClientContactPayload: CreateClientContactPayload;
  CreateClientPayload: CreateClientPayload;
  CreateCollaborationPayload: CreateCollaborationPayload;
  CreateUserPayload: CreateUserPayload;
  CsClientContactDetails: ResolverTypeWrapper<CsClientContactDetails>;
  CsClientSummary: ResolverTypeWrapper<CsClientSummary>;
  CsCollabDeliverables: CsCollabDeliverables;
  CsCollabStatus: CsCollabStatus;
  CsCollabType: CsCollabType;
  CsDeliverableStatus: CsDeliverableStatus;
  CsGender: CsGender;
  CsPaymentStatus: CsPaymentStatus;
  DeleteStatus: DeleteStatus;
  DeleteUserResponse: ResolverTypeWrapper<DeleteUserResponse>;
  FetchUserPayload: FetchUserPayload;
  ID: ResolverTypeWrapper<Scalars['ID']['output']>;
  Int: ResolverTypeWrapper<Scalars['Int']['output']>;
  Mutation: ResolverTypeWrapper<{}>;
  OrderBy: OrderBy;
  PaginationInput: PaginationInput;
  PermissionValue: PermissionValue;
  PermissionsResponse: ResolverTypeWrapper<PermissionsResponse>;
  Query: ResolverTypeWrapper<{}>;
  SignInResponse: ResolverTypeWrapper<SignInResponse>;
  String: ResolverTypeWrapper<Scalars['String']['output']>;
  UpdateCollabClientPayload: UpdateCollabClientPayload;
  UpdateCollaborationPayload: UpdateCollaborationPayload;
  UpdateUserPayload: UpdateUserPayload;
  User: ResolverTypeWrapper<User>;
  UserLoginPayload: UserLoginPayload;
  UserProfile: ResolverTypeWrapper<UserProfile>;
  UserRole: UserRole;
  UserSearch: UserSearch;
  UserSearchFields: UserSearchFields;
  UserSorting: UserSorting;
};

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = {
  AssignPermissionsPayload: AssignPermissionsPayload;
  Boolean: Scalars['Boolean']['output'];
  Collaboration: Collaboration;
  CreateClientContactPayload: CreateClientContactPayload;
  CreateClientPayload: CreateClientPayload;
  CreateCollaborationPayload: CreateCollaborationPayload;
  CreateUserPayload: CreateUserPayload;
  CsClientContactDetails: CsClientContactDetails;
  CsClientSummary: CsClientSummary;
  DeleteUserResponse: DeleteUserResponse;
  FetchUserPayload: FetchUserPayload;
  ID: Scalars['ID']['output'];
  Int: Scalars['Int']['output'];
  Mutation: {};
  PaginationInput: PaginationInput;
  PermissionsResponse: PermissionsResponse;
  Query: {};
  SignInResponse: SignInResponse;
  String: Scalars['String']['output'];
  UpdateCollabClientPayload: UpdateCollabClientPayload;
  UpdateCollaborationPayload: UpdateCollaborationPayload;
  UpdateUserPayload: UpdateUserPayload;
  User: User;
  UserLoginPayload: UserLoginPayload;
  UserProfile: UserProfile;
  UserSearch: UserSearch;
  UserSorting: UserSorting;
};

export type CollaborationResolvers<ContextType = any, ParentType extends ResolversParentTypes['Collaboration'] = ResolversParentTypes['Collaboration']> = {
  client?: Resolver<ResolversTypes['CsClientSummary'], ParentType, ContextType>;
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
  isMine?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  paymentAmount?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  paymentDate?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  paymentStatus?: Resolver<ResolversTypes['CsPaymentStatus'], ParentType, ContextType>;
  type?: Resolver<ResolversTypes['CsCollabType'], ParentType, ContextType>;
  updatedAt?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  user?: Resolver<Maybe<ResolversTypes['UserProfile']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CsClientContactDetailsResolvers<ContextType = any, ParentType extends ResolversParentTypes['CsClientContactDetails'] = ResolversParentTypes['CsClientContactDetails']> = {
  clientNotes?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  email?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  isMine?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  phone?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  user?: Resolver<Maybe<ResolversTypes['UserProfile']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CsClientSummaryResolvers<ContextType = any, ParentType extends ResolversParentTypes['CsClientSummary'] = ResolversParentTypes['CsClientSummary']> = {
  clientContacts?: Resolver<Array<ResolversTypes['CsClientContactDetails']>, ParentType, ContextType>;
  clientNotes?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  instagram?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  isMine?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  user?: Resolver<Maybe<ResolversTypes['UserProfile']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type DeleteUserResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['DeleteUserResponse'] = ResolversParentTypes['DeleteUserResponse']> = {
  message?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  status?: Resolver<ResolversTypes['DeleteStatus'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MutationResolvers<ContextType = any, ParentType extends ResolversParentTypes['Mutation'] = ResolversParentTypes['Mutation']> = {
  createUser?: Resolver<ResolversTypes['User'], ParentType, ContextType, RequireFields<MutationCreateUserArgs, 'payload'>>;
  csCreateClient?: Resolver<ResolversTypes['CsClientSummary'], ParentType, ContextType, RequireFields<MutationCsCreateClientArgs, 'payload'>>;
  csCreateCollaboration?: Resolver<ResolversTypes['Collaboration'], ParentType, ContextType, RequireFields<MutationCsCreateCollaborationArgs, 'payload'>>;
  csEditCollaboration?: Resolver<ResolversTypes['Collaboration'], ParentType, ContextType, Partial<MutationCsEditCollaborationArgs>>;
  deleteAUser?: Resolver<ResolversTypes['DeleteUserResponse'], ParentType, ContextType, RequireFields<MutationDeleteAUserArgs, 'id'>>;
  umsAssignPermissionsToRole?: Resolver<ResolversTypes['PermissionsResponse'], ParentType, ContextType, RequireFields<MutationUmsAssignPermissionsToRoleArgs, 'payload'>>;
  umsSignUp?: Resolver<ResolversTypes['SignInResponse'], ParentType, ContextType, RequireFields<MutationUmsSignUpArgs, 'payload'>>;
  updateUser?: Resolver<ResolversTypes['User'], ParentType, ContextType, RequireFields<MutationUpdateUserArgs, 'payload'>>;
};

export type PermissionsResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['PermissionsResponse'] = ResolversParentTypes['PermissionsResponse']> = {
  permissions?: Resolver<Array<ResolversTypes['PermissionValue']>, ParentType, ContextType>;
  role?: Resolver<Maybe<ResolversTypes['UserRole']>, ParentType, ContextType>;
  totalCount?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type QueryResolvers<ContextType = any, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = {
  csGetClients?: Resolver<Array<ResolversTypes['CsClientSummary']>, ParentType, ContextType>;
  csGetCollaborations?: Resolver<Array<ResolversTypes['Collaboration']>, ParentType, ContextType>;
  getAllUsers?: Resolver<Maybe<Array<ResolversTypes['User']>>, ParentType, ContextType, Partial<QueryGetAllUsersArgs>>;
  getUserById?: Resolver<ResolversTypes['User'], ParentType, ContextType, RequireFields<QueryGetUserByIdArgs, 'id'>>;
  umsGetUserPermissions?: Resolver<ResolversTypes['PermissionsResponse'], ParentType, ContextType, RequireFields<QueryUmsGetUserPermissionsArgs, 'userId'>>;
  umsLogin?: Resolver<ResolversTypes['SignInResponse'], ParentType, ContextType, RequireFields<QueryUmsLoginArgs, 'payload'>>;
};

export type SignInResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['SignInResponse'] = ResolversParentTypes['SignInResponse']> = {
  message?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  token?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  user?: Resolver<ResolversTypes['User'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UserResolvers<ContextType = any, ParentType extends ResolversParentTypes['User'] = ResolversParentTypes['User']> = {
  createdAt?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  email?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  permissions?: Resolver<Array<ResolversTypes['PermissionValue']>, ParentType, ContextType>;
  role?: Resolver<Maybe<ResolversTypes['UserRole']>, ParentType, ContextType>;
  updatedAt?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UserProfileResolvers<ContextType = any, ParentType extends ResolversParentTypes['UserProfile'] = ResolversParentTypes['UserProfile']> = {
  email?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  role?: Resolver<Maybe<ResolversTypes['UserRole']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Resolvers<ContextType = any> = {
  Collaboration?: CollaborationResolvers<ContextType>;
  CsClientContactDetails?: CsClientContactDetailsResolvers<ContextType>;
  CsClientSummary?: CsClientSummaryResolvers<ContextType>;
  DeleteUserResponse?: DeleteUserResponseResolvers<ContextType>;
  Mutation?: MutationResolvers<ContextType>;
  PermissionsResponse?: PermissionsResponseResolvers<ContextType>;
  Query?: QueryResolvers<ContextType>;
  SignInResponse?: SignInResponseResolvers<ContextType>;
  User?: UserResolvers<ContextType>;
  UserProfile?: UserProfileResolvers<ContextType>;
};

