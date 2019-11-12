import gql from 'graphql-tag';
import * as ApolloReactCommon from '@apollo/react-common';
import * as ApolloReactHooks from '@apollo/react-hooks';
export type Maybe<T> = T | null;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string,
  String: string,
  Boolean: boolean,
  Int: number,
  Float: number,
  timestamptz: any,
};

/** expression to compare columns of type Int. All fields are combined with logical 'AND'. */
export type Int_Comparison_Exp = {
  _eq?: Maybe<Scalars['Int']>,
  _gt?: Maybe<Scalars['Int']>,
  _gte?: Maybe<Scalars['Int']>,
  _in?: Maybe<Array<Scalars['Int']>>,
  _is_null?: Maybe<Scalars['Boolean']>,
  _lt?: Maybe<Scalars['Int']>,
  _lte?: Maybe<Scalars['Int']>,
  _neq?: Maybe<Scalars['Int']>,
  _nin?: Maybe<Array<Scalars['Int']>>,
};

/** mutation root */
export type Mutation_Root = {
   __typename?: 'mutation_root',
  /** delete data from the table: "story" */
  delete_story?: Maybe<Story_Mutation_Response>,
  /** delete data from the table: "user" */
  delete_user?: Maybe<User_Mutation_Response>,
  /** insert data into the table: "story" */
  insert_story?: Maybe<Story_Mutation_Response>,
  /** insert data into the table: "user" */
  insert_user?: Maybe<User_Mutation_Response>,
  /** update data of the table: "story" */
  update_story?: Maybe<Story_Mutation_Response>,
  /** update data of the table: "user" */
  update_user?: Maybe<User_Mutation_Response>,
};


/** mutation root */
export type Mutation_RootDelete_StoryArgs = {
  where: Story_Bool_Exp
};


/** mutation root */
export type Mutation_RootDelete_UserArgs = {
  where: User_Bool_Exp
};


/** mutation root */
export type Mutation_RootInsert_StoryArgs = {
  objects: Array<Story_Insert_Input>,
  on_conflict?: Maybe<Story_On_Conflict>
};


/** mutation root */
export type Mutation_RootInsert_UserArgs = {
  objects: Array<User_Insert_Input>,
  on_conflict?: Maybe<User_On_Conflict>
};


/** mutation root */
export type Mutation_RootUpdate_StoryArgs = {
  _inc?: Maybe<Story_Inc_Input>,
  _set?: Maybe<Story_Set_Input>,
  where: Story_Bool_Exp
};


/** mutation root */
export type Mutation_RootUpdate_UserArgs = {
  _inc?: Maybe<User_Inc_Input>,
  _set?: Maybe<User_Set_Input>,
  where: User_Bool_Exp
};

/** column ordering options */
export enum Order_By {
  /** in the ascending order, nulls last */
  Asc = 'asc',
  /** in the ascending order, nulls first */
  AscNullsFirst = 'asc_nulls_first',
  /** in the ascending order, nulls last */
  AscNullsLast = 'asc_nulls_last',
  /** in the descending order, nulls first */
  Desc = 'desc',
  /** in the descending order, nulls first */
  DescNullsFirst = 'desc_nulls_first',
  /** in the descending order, nulls last */
  DescNullsLast = 'desc_nulls_last'
}

/** query root */
export type Query_Root = {
   __typename?: 'query_root',
  /** fetch data from the table: "story" */
  story: Array<Story>,
  /** fetch aggregated fields from the table: "story" */
  story_aggregate: Story_Aggregate,
  /** fetch data from the table: "story" using primary key columns */
  story_by_pk?: Maybe<Story>,
  /** fetch data from the table: "user" */
  user: Array<User>,
  /** fetch aggregated fields from the table: "user" */
  user_aggregate: User_Aggregate,
  /** fetch data from the table: "user" using primary key columns */
  user_by_pk?: Maybe<User>,
};


/** query root */
export type Query_RootStoryArgs = {
  distinct_on?: Maybe<Array<Story_Select_Column>>,
  limit?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  order_by?: Maybe<Array<Story_Order_By>>,
  where?: Maybe<Story_Bool_Exp>
};


/** query root */
export type Query_RootStory_AggregateArgs = {
  distinct_on?: Maybe<Array<Story_Select_Column>>,
  limit?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  order_by?: Maybe<Array<Story_Order_By>>,
  where?: Maybe<Story_Bool_Exp>
};


/** query root */
export type Query_RootStory_By_PkArgs = {
  id: Scalars['Int']
};


/** query root */
export type Query_RootUserArgs = {
  distinct_on?: Maybe<Array<User_Select_Column>>,
  limit?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  order_by?: Maybe<Array<User_Order_By>>,
  where?: Maybe<User_Bool_Exp>
};


/** query root */
export type Query_RootUser_AggregateArgs = {
  distinct_on?: Maybe<Array<User_Select_Column>>,
  limit?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  order_by?: Maybe<Array<User_Order_By>>,
  where?: Maybe<User_Bool_Exp>
};


/** query root */
export type Query_RootUser_By_PkArgs = {
  id: Scalars['Int']
};

/** columns and relationships of "story" */
export type Story = {
   __typename?: 'story',
  created_at: Scalars['timestamptz'],
  id: Scalars['Int'],
  text: Scalars['String'],
  title: Scalars['String'],
  updated_at: Scalars['timestamptz'],
  /** An object relationship */
  user?: Maybe<User>,
  user_id?: Maybe<Scalars['Int']>,
};

/** aggregated selection of "story" */
export type Story_Aggregate = {
   __typename?: 'story_aggregate',
  aggregate?: Maybe<Story_Aggregate_Fields>,
  nodes: Array<Story>,
};

/** aggregate fields of "story" */
export type Story_Aggregate_Fields = {
   __typename?: 'story_aggregate_fields',
  avg?: Maybe<Story_Avg_Fields>,
  count?: Maybe<Scalars['Int']>,
  max?: Maybe<Story_Max_Fields>,
  min?: Maybe<Story_Min_Fields>,
  stddev?: Maybe<Story_Stddev_Fields>,
  stddev_pop?: Maybe<Story_Stddev_Pop_Fields>,
  stddev_samp?: Maybe<Story_Stddev_Samp_Fields>,
  sum?: Maybe<Story_Sum_Fields>,
  var_pop?: Maybe<Story_Var_Pop_Fields>,
  var_samp?: Maybe<Story_Var_Samp_Fields>,
  variance?: Maybe<Story_Variance_Fields>,
};


/** aggregate fields of "story" */
export type Story_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Story_Select_Column>>,
  distinct?: Maybe<Scalars['Boolean']>
};

/** order by aggregate values of table "story" */
export type Story_Aggregate_Order_By = {
  avg?: Maybe<Story_Avg_Order_By>,
  count?: Maybe<Order_By>,
  max?: Maybe<Story_Max_Order_By>,
  min?: Maybe<Story_Min_Order_By>,
  stddev?: Maybe<Story_Stddev_Order_By>,
  stddev_pop?: Maybe<Story_Stddev_Pop_Order_By>,
  stddev_samp?: Maybe<Story_Stddev_Samp_Order_By>,
  sum?: Maybe<Story_Sum_Order_By>,
  var_pop?: Maybe<Story_Var_Pop_Order_By>,
  var_samp?: Maybe<Story_Var_Samp_Order_By>,
  variance?: Maybe<Story_Variance_Order_By>,
};

/** input type for inserting array relation for remote table "story" */
export type Story_Arr_Rel_Insert_Input = {
  data: Array<Story_Insert_Input>,
  on_conflict?: Maybe<Story_On_Conflict>,
};

/** aggregate avg on columns */
export type Story_Avg_Fields = {
   __typename?: 'story_avg_fields',
  id?: Maybe<Scalars['Float']>,
  user_id?: Maybe<Scalars['Float']>,
};

/** order by avg() on columns of table "story" */
export type Story_Avg_Order_By = {
  id?: Maybe<Order_By>,
  user_id?: Maybe<Order_By>,
};

/** Boolean expression to filter rows from the table "story". All fields are combined with a logical 'AND'. */
export type Story_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Story_Bool_Exp>>>,
  _not?: Maybe<Story_Bool_Exp>,
  _or?: Maybe<Array<Maybe<Story_Bool_Exp>>>,
  created_at?: Maybe<Timestamptz_Comparison_Exp>,
  id?: Maybe<Int_Comparison_Exp>,
  text?: Maybe<String_Comparison_Exp>,
  title?: Maybe<String_Comparison_Exp>,
  updated_at?: Maybe<Timestamptz_Comparison_Exp>,
  user?: Maybe<User_Bool_Exp>,
  user_id?: Maybe<Int_Comparison_Exp>,
};

/** unique or primary key constraints on table "story" */
export enum Story_Constraint {
  /** unique or primary key constraint */
  StoryPkey = 'story_pkey'
}

/** input type for incrementing integer columne in table "story" */
export type Story_Inc_Input = {
  id?: Maybe<Scalars['Int']>,
  user_id?: Maybe<Scalars['Int']>,
};

/** input type for inserting data into table "story" */
export type Story_Insert_Input = {
  created_at?: Maybe<Scalars['timestamptz']>,
  id?: Maybe<Scalars['Int']>,
  text?: Maybe<Scalars['String']>,
  title?: Maybe<Scalars['String']>,
  updated_at?: Maybe<Scalars['timestamptz']>,
  user?: Maybe<User_Obj_Rel_Insert_Input>,
  user_id?: Maybe<Scalars['Int']>,
};

/** aggregate max on columns */
export type Story_Max_Fields = {
   __typename?: 'story_max_fields',
  created_at?: Maybe<Scalars['timestamptz']>,
  id?: Maybe<Scalars['Int']>,
  text?: Maybe<Scalars['String']>,
  title?: Maybe<Scalars['String']>,
  updated_at?: Maybe<Scalars['timestamptz']>,
  user_id?: Maybe<Scalars['Int']>,
};

/** order by max() on columns of table "story" */
export type Story_Max_Order_By = {
  created_at?: Maybe<Order_By>,
  id?: Maybe<Order_By>,
  text?: Maybe<Order_By>,
  title?: Maybe<Order_By>,
  updated_at?: Maybe<Order_By>,
  user_id?: Maybe<Order_By>,
};

/** aggregate min on columns */
export type Story_Min_Fields = {
   __typename?: 'story_min_fields',
  created_at?: Maybe<Scalars['timestamptz']>,
  id?: Maybe<Scalars['Int']>,
  text?: Maybe<Scalars['String']>,
  title?: Maybe<Scalars['String']>,
  updated_at?: Maybe<Scalars['timestamptz']>,
  user_id?: Maybe<Scalars['Int']>,
};

/** order by min() on columns of table "story" */
export type Story_Min_Order_By = {
  created_at?: Maybe<Order_By>,
  id?: Maybe<Order_By>,
  text?: Maybe<Order_By>,
  title?: Maybe<Order_By>,
  updated_at?: Maybe<Order_By>,
  user_id?: Maybe<Order_By>,
};

/** response of any mutation on the table "story" */
export type Story_Mutation_Response = {
   __typename?: 'story_mutation_response',
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'],
  /** data of the affected rows by the mutation */
  returning: Array<Story>,
};

/** input type for inserting object relation for remote table "story" */
export type Story_Obj_Rel_Insert_Input = {
  data: Story_Insert_Input,
  on_conflict?: Maybe<Story_On_Conflict>,
};

/** on conflict condition type for table "story" */
export type Story_On_Conflict = {
  constraint: Story_Constraint,
  update_columns: Array<Story_Update_Column>,
  where?: Maybe<Story_Bool_Exp>,
};

/** ordering options when selecting data from "story" */
export type Story_Order_By = {
  created_at?: Maybe<Order_By>,
  id?: Maybe<Order_By>,
  text?: Maybe<Order_By>,
  title?: Maybe<Order_By>,
  updated_at?: Maybe<Order_By>,
  user?: Maybe<User_Order_By>,
  user_id?: Maybe<Order_By>,
};

/** select columns of table "story" */
export enum Story_Select_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  Text = 'text',
  /** column name */
  Title = 'title',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  UserId = 'user_id'
}

/** input type for updating data in table "story" */
export type Story_Set_Input = {
  created_at?: Maybe<Scalars['timestamptz']>,
  id?: Maybe<Scalars['Int']>,
  text?: Maybe<Scalars['String']>,
  title?: Maybe<Scalars['String']>,
  updated_at?: Maybe<Scalars['timestamptz']>,
  user_id?: Maybe<Scalars['Int']>,
};

/** aggregate stddev on columns */
export type Story_Stddev_Fields = {
   __typename?: 'story_stddev_fields',
  id?: Maybe<Scalars['Float']>,
  user_id?: Maybe<Scalars['Float']>,
};

/** order by stddev() on columns of table "story" */
export type Story_Stddev_Order_By = {
  id?: Maybe<Order_By>,
  user_id?: Maybe<Order_By>,
};

/** aggregate stddev_pop on columns */
export type Story_Stddev_Pop_Fields = {
   __typename?: 'story_stddev_pop_fields',
  id?: Maybe<Scalars['Float']>,
  user_id?: Maybe<Scalars['Float']>,
};

/** order by stddev_pop() on columns of table "story" */
export type Story_Stddev_Pop_Order_By = {
  id?: Maybe<Order_By>,
  user_id?: Maybe<Order_By>,
};

/** aggregate stddev_samp on columns */
export type Story_Stddev_Samp_Fields = {
   __typename?: 'story_stddev_samp_fields',
  id?: Maybe<Scalars['Float']>,
  user_id?: Maybe<Scalars['Float']>,
};

/** order by stddev_samp() on columns of table "story" */
export type Story_Stddev_Samp_Order_By = {
  id?: Maybe<Order_By>,
  user_id?: Maybe<Order_By>,
};

/** aggregate sum on columns */
export type Story_Sum_Fields = {
   __typename?: 'story_sum_fields',
  id?: Maybe<Scalars['Int']>,
  user_id?: Maybe<Scalars['Int']>,
};

/** order by sum() on columns of table "story" */
export type Story_Sum_Order_By = {
  id?: Maybe<Order_By>,
  user_id?: Maybe<Order_By>,
};

/** update columns of table "story" */
export enum Story_Update_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  Text = 'text',
  /** column name */
  Title = 'title',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  UserId = 'user_id'
}

/** aggregate var_pop on columns */
export type Story_Var_Pop_Fields = {
   __typename?: 'story_var_pop_fields',
  id?: Maybe<Scalars['Float']>,
  user_id?: Maybe<Scalars['Float']>,
};

/** order by var_pop() on columns of table "story" */
export type Story_Var_Pop_Order_By = {
  id?: Maybe<Order_By>,
  user_id?: Maybe<Order_By>,
};

/** aggregate var_samp on columns */
export type Story_Var_Samp_Fields = {
   __typename?: 'story_var_samp_fields',
  id?: Maybe<Scalars['Float']>,
  user_id?: Maybe<Scalars['Float']>,
};

/** order by var_samp() on columns of table "story" */
export type Story_Var_Samp_Order_By = {
  id?: Maybe<Order_By>,
  user_id?: Maybe<Order_By>,
};

/** aggregate variance on columns */
export type Story_Variance_Fields = {
   __typename?: 'story_variance_fields',
  id?: Maybe<Scalars['Float']>,
  user_id?: Maybe<Scalars['Float']>,
};

/** order by variance() on columns of table "story" */
export type Story_Variance_Order_By = {
  id?: Maybe<Order_By>,
  user_id?: Maybe<Order_By>,
};

/** expression to compare columns of type String. All fields are combined with logical 'AND'. */
export type String_Comparison_Exp = {
  _eq?: Maybe<Scalars['String']>,
  _gt?: Maybe<Scalars['String']>,
  _gte?: Maybe<Scalars['String']>,
  _ilike?: Maybe<Scalars['String']>,
  _in?: Maybe<Array<Scalars['String']>>,
  _is_null?: Maybe<Scalars['Boolean']>,
  _like?: Maybe<Scalars['String']>,
  _lt?: Maybe<Scalars['String']>,
  _lte?: Maybe<Scalars['String']>,
  _neq?: Maybe<Scalars['String']>,
  _nilike?: Maybe<Scalars['String']>,
  _nin?: Maybe<Array<Scalars['String']>>,
  _nlike?: Maybe<Scalars['String']>,
  _nsimilar?: Maybe<Scalars['String']>,
  _similar?: Maybe<Scalars['String']>,
};

/** subscription root */
export type Subscription_Root = {
   __typename?: 'subscription_root',
  /** fetch data from the table: "story" */
  story: Array<Story>,
  /** fetch aggregated fields from the table: "story" */
  story_aggregate: Story_Aggregate,
  /** fetch data from the table: "story" using primary key columns */
  story_by_pk?: Maybe<Story>,
  /** fetch data from the table: "user" */
  user: Array<User>,
  /** fetch aggregated fields from the table: "user" */
  user_aggregate: User_Aggregate,
  /** fetch data from the table: "user" using primary key columns */
  user_by_pk?: Maybe<User>,
};


/** subscription root */
export type Subscription_RootStoryArgs = {
  distinct_on?: Maybe<Array<Story_Select_Column>>,
  limit?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  order_by?: Maybe<Array<Story_Order_By>>,
  where?: Maybe<Story_Bool_Exp>
};


/** subscription root */
export type Subscription_RootStory_AggregateArgs = {
  distinct_on?: Maybe<Array<Story_Select_Column>>,
  limit?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  order_by?: Maybe<Array<Story_Order_By>>,
  where?: Maybe<Story_Bool_Exp>
};


/** subscription root */
export type Subscription_RootStory_By_PkArgs = {
  id: Scalars['Int']
};


/** subscription root */
export type Subscription_RootUserArgs = {
  distinct_on?: Maybe<Array<User_Select_Column>>,
  limit?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  order_by?: Maybe<Array<User_Order_By>>,
  where?: Maybe<User_Bool_Exp>
};


/** subscription root */
export type Subscription_RootUser_AggregateArgs = {
  distinct_on?: Maybe<Array<User_Select_Column>>,
  limit?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  order_by?: Maybe<Array<User_Order_By>>,
  where?: Maybe<User_Bool_Exp>
};


/** subscription root */
export type Subscription_RootUser_By_PkArgs = {
  id: Scalars['Int']
};


/** expression to compare columns of type timestamptz. All fields are combined with logical 'AND'. */
export type Timestamptz_Comparison_Exp = {
  _eq?: Maybe<Scalars['timestamptz']>,
  _gt?: Maybe<Scalars['timestamptz']>,
  _gte?: Maybe<Scalars['timestamptz']>,
  _in?: Maybe<Array<Scalars['timestamptz']>>,
  _is_null?: Maybe<Scalars['Boolean']>,
  _lt?: Maybe<Scalars['timestamptz']>,
  _lte?: Maybe<Scalars['timestamptz']>,
  _neq?: Maybe<Scalars['timestamptz']>,
  _nin?: Maybe<Array<Scalars['timestamptz']>>,
};

/** columns and relationships of "user" */
export type User = {
   __typename?: 'user',
  created_at: Scalars['timestamptz'],
  email: Scalars['String'],
  id: Scalars['Int'],
  name: Scalars['String'],
  password: Scalars['String'],
  /** An array relationship */
  stories: Array<Story>,
  /** An aggregated array relationship */
  stories_aggregate: Story_Aggregate,
  updated_at: Scalars['timestamptz'],
};


/** columns and relationships of "user" */
export type UserStoriesArgs = {
  distinct_on?: Maybe<Array<Story_Select_Column>>,
  limit?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  order_by?: Maybe<Array<Story_Order_By>>,
  where?: Maybe<Story_Bool_Exp>
};


/** columns and relationships of "user" */
export type UserStories_AggregateArgs = {
  distinct_on?: Maybe<Array<Story_Select_Column>>,
  limit?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  order_by?: Maybe<Array<Story_Order_By>>,
  where?: Maybe<Story_Bool_Exp>
};

/** aggregated selection of "user" */
export type User_Aggregate = {
   __typename?: 'user_aggregate',
  aggregate?: Maybe<User_Aggregate_Fields>,
  nodes: Array<User>,
};

/** aggregate fields of "user" */
export type User_Aggregate_Fields = {
   __typename?: 'user_aggregate_fields',
  avg?: Maybe<User_Avg_Fields>,
  count?: Maybe<Scalars['Int']>,
  max?: Maybe<User_Max_Fields>,
  min?: Maybe<User_Min_Fields>,
  stddev?: Maybe<User_Stddev_Fields>,
  stddev_pop?: Maybe<User_Stddev_Pop_Fields>,
  stddev_samp?: Maybe<User_Stddev_Samp_Fields>,
  sum?: Maybe<User_Sum_Fields>,
  var_pop?: Maybe<User_Var_Pop_Fields>,
  var_samp?: Maybe<User_Var_Samp_Fields>,
  variance?: Maybe<User_Variance_Fields>,
};


/** aggregate fields of "user" */
export type User_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<User_Select_Column>>,
  distinct?: Maybe<Scalars['Boolean']>
};

/** order by aggregate values of table "user" */
export type User_Aggregate_Order_By = {
  avg?: Maybe<User_Avg_Order_By>,
  count?: Maybe<Order_By>,
  max?: Maybe<User_Max_Order_By>,
  min?: Maybe<User_Min_Order_By>,
  stddev?: Maybe<User_Stddev_Order_By>,
  stddev_pop?: Maybe<User_Stddev_Pop_Order_By>,
  stddev_samp?: Maybe<User_Stddev_Samp_Order_By>,
  sum?: Maybe<User_Sum_Order_By>,
  var_pop?: Maybe<User_Var_Pop_Order_By>,
  var_samp?: Maybe<User_Var_Samp_Order_By>,
  variance?: Maybe<User_Variance_Order_By>,
};

/** input type for inserting array relation for remote table "user" */
export type User_Arr_Rel_Insert_Input = {
  data: Array<User_Insert_Input>,
  on_conflict?: Maybe<User_On_Conflict>,
};

/** aggregate avg on columns */
export type User_Avg_Fields = {
   __typename?: 'user_avg_fields',
  id?: Maybe<Scalars['Float']>,
};

/** order by avg() on columns of table "user" */
export type User_Avg_Order_By = {
  id?: Maybe<Order_By>,
};

/** Boolean expression to filter rows from the table "user". All fields are combined with a logical 'AND'. */
export type User_Bool_Exp = {
  _and?: Maybe<Array<Maybe<User_Bool_Exp>>>,
  _not?: Maybe<User_Bool_Exp>,
  _or?: Maybe<Array<Maybe<User_Bool_Exp>>>,
  created_at?: Maybe<Timestamptz_Comparison_Exp>,
  email?: Maybe<String_Comparison_Exp>,
  id?: Maybe<Int_Comparison_Exp>,
  name?: Maybe<String_Comparison_Exp>,
  password?: Maybe<String_Comparison_Exp>,
  stories?: Maybe<Story_Bool_Exp>,
  updated_at?: Maybe<Timestamptz_Comparison_Exp>,
};

/** unique or primary key constraints on table "user" */
export enum User_Constraint {
  /** unique or primary key constraint */
  UserEmailKey = 'user_email_key',
  /** unique or primary key constraint */
  UserPasswordKey = 'user_password_key',
  /** unique or primary key constraint */
  UserPkey = 'user_pkey'
}

/** input type for incrementing integer columne in table "user" */
export type User_Inc_Input = {
  id?: Maybe<Scalars['Int']>,
};

/** input type for inserting data into table "user" */
export type User_Insert_Input = {
  created_at?: Maybe<Scalars['timestamptz']>,
  email?: Maybe<Scalars['String']>,
  id?: Maybe<Scalars['Int']>,
  name?: Maybe<Scalars['String']>,
  password?: Maybe<Scalars['String']>,
  stories?: Maybe<Story_Arr_Rel_Insert_Input>,
  updated_at?: Maybe<Scalars['timestamptz']>,
};

/** aggregate max on columns */
export type User_Max_Fields = {
   __typename?: 'user_max_fields',
  created_at?: Maybe<Scalars['timestamptz']>,
  email?: Maybe<Scalars['String']>,
  id?: Maybe<Scalars['Int']>,
  name?: Maybe<Scalars['String']>,
  password?: Maybe<Scalars['String']>,
  updated_at?: Maybe<Scalars['timestamptz']>,
};

/** order by max() on columns of table "user" */
export type User_Max_Order_By = {
  created_at?: Maybe<Order_By>,
  email?: Maybe<Order_By>,
  id?: Maybe<Order_By>,
  name?: Maybe<Order_By>,
  password?: Maybe<Order_By>,
  updated_at?: Maybe<Order_By>,
};

/** aggregate min on columns */
export type User_Min_Fields = {
   __typename?: 'user_min_fields',
  created_at?: Maybe<Scalars['timestamptz']>,
  email?: Maybe<Scalars['String']>,
  id?: Maybe<Scalars['Int']>,
  name?: Maybe<Scalars['String']>,
  password?: Maybe<Scalars['String']>,
  updated_at?: Maybe<Scalars['timestamptz']>,
};

/** order by min() on columns of table "user" */
export type User_Min_Order_By = {
  created_at?: Maybe<Order_By>,
  email?: Maybe<Order_By>,
  id?: Maybe<Order_By>,
  name?: Maybe<Order_By>,
  password?: Maybe<Order_By>,
  updated_at?: Maybe<Order_By>,
};

/** response of any mutation on the table "user" */
export type User_Mutation_Response = {
   __typename?: 'user_mutation_response',
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'],
  /** data of the affected rows by the mutation */
  returning: Array<User>,
};

/** input type for inserting object relation for remote table "user" */
export type User_Obj_Rel_Insert_Input = {
  data: User_Insert_Input,
  on_conflict?: Maybe<User_On_Conflict>,
};

/** on conflict condition type for table "user" */
export type User_On_Conflict = {
  constraint: User_Constraint,
  update_columns: Array<User_Update_Column>,
  where?: Maybe<User_Bool_Exp>,
};

/** ordering options when selecting data from "user" */
export type User_Order_By = {
  created_at?: Maybe<Order_By>,
  email?: Maybe<Order_By>,
  id?: Maybe<Order_By>,
  name?: Maybe<Order_By>,
  password?: Maybe<Order_By>,
  stories_aggregate?: Maybe<Story_Aggregate_Order_By>,
  updated_at?: Maybe<Order_By>,
};

/** select columns of table "user" */
export enum User_Select_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Email = 'email',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  Password = 'password',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** input type for updating data in table "user" */
export type User_Set_Input = {
  created_at?: Maybe<Scalars['timestamptz']>,
  email?: Maybe<Scalars['String']>,
  id?: Maybe<Scalars['Int']>,
  name?: Maybe<Scalars['String']>,
  password?: Maybe<Scalars['String']>,
  updated_at?: Maybe<Scalars['timestamptz']>,
};

/** aggregate stddev on columns */
export type User_Stddev_Fields = {
   __typename?: 'user_stddev_fields',
  id?: Maybe<Scalars['Float']>,
};

/** order by stddev() on columns of table "user" */
export type User_Stddev_Order_By = {
  id?: Maybe<Order_By>,
};

/** aggregate stddev_pop on columns */
export type User_Stddev_Pop_Fields = {
   __typename?: 'user_stddev_pop_fields',
  id?: Maybe<Scalars['Float']>,
};

/** order by stddev_pop() on columns of table "user" */
export type User_Stddev_Pop_Order_By = {
  id?: Maybe<Order_By>,
};

/** aggregate stddev_samp on columns */
export type User_Stddev_Samp_Fields = {
   __typename?: 'user_stddev_samp_fields',
  id?: Maybe<Scalars['Float']>,
};

/** order by stddev_samp() on columns of table "user" */
export type User_Stddev_Samp_Order_By = {
  id?: Maybe<Order_By>,
};

/** aggregate sum on columns */
export type User_Sum_Fields = {
   __typename?: 'user_sum_fields',
  id?: Maybe<Scalars['Int']>,
};

/** order by sum() on columns of table "user" */
export type User_Sum_Order_By = {
  id?: Maybe<Order_By>,
};

/** update columns of table "user" */
export enum User_Update_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Email = 'email',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  Password = 'password',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** aggregate var_pop on columns */
export type User_Var_Pop_Fields = {
   __typename?: 'user_var_pop_fields',
  id?: Maybe<Scalars['Float']>,
};

/** order by var_pop() on columns of table "user" */
export type User_Var_Pop_Order_By = {
  id?: Maybe<Order_By>,
};

/** aggregate var_samp on columns */
export type User_Var_Samp_Fields = {
   __typename?: 'user_var_samp_fields',
  id?: Maybe<Scalars['Float']>,
};

/** order by var_samp() on columns of table "user" */
export type User_Var_Samp_Order_By = {
  id?: Maybe<Order_By>,
};

/** aggregate variance on columns */
export type User_Variance_Fields = {
   __typename?: 'user_variance_fields',
  id?: Maybe<Scalars['Float']>,
};

/** order by variance() on columns of table "user" */
export type User_Variance_Order_By = {
  id?: Maybe<Order_By>,
};

export type StoriesQueryVariables = {};


export type StoriesQuery = (
  { __typename?: 'query_root' }
  & { stories: Array<(
    { __typename?: 'story' }
    & Pick<Story, 'title' | 'text'>
  )> }
);


export const StoriesDocument = gql`
    query Stories {
  stories: story {
    title
    text
  }
}
    `;

/**
 * __useStoriesQuery__
 *
 * To run a query within a React component, call `useStoriesQuery` and pass it any options that fit your needs.
 * When your component renders, `useStoriesQuery` returns an object from Apollo Client that contains loading, error, and data properties 
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useStoriesQuery({
 *   variables: {
 *   },
 * });
 */
export function useStoriesQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<StoriesQuery, StoriesQueryVariables>) {
        return ApolloReactHooks.useQuery<StoriesQuery, StoriesQueryVariables>(StoriesDocument, baseOptions);
      }
export function useStoriesLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<StoriesQuery, StoriesQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<StoriesQuery, StoriesQueryVariables>(StoriesDocument, baseOptions);
        }
export type StoriesQueryHookResult = ReturnType<typeof useStoriesQuery>;
export type StoriesLazyQueryHookResult = ReturnType<typeof useStoriesLazyQuery>;
export type StoriesQueryResult = ApolloReactCommon.QueryResult<StoriesQuery, StoriesQueryVariables>;