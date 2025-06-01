import type { Configuration } from './configuration'
import type { AxiosPromise, AxiosInstance, RawAxiosRequestConfig } from 'axios'
import globalAxios from 'axios'
// Some imports not used depending on template conditions
// @ts-ignore
import {
  DUMMY_BASE_URL,
  assertParamExists,
  setApiKeyToObject,
  setBasicAuthToObject,
  setBearerAuthToObject,
  setOAuthToObject,
  setSearchParams,
  serializeDataIfNeeded,
  toPathString,
  createRequestFunction
} from './common'
import type { RequestArgs } from './base'
// @ts-ignore
import { BASE_PATH, COLLECTION_FORMATS, BaseAPI, RequiredError, operationServerMap } from './base'


export interface APIError {

  'message'?: string;

  'url'?: string;
}

export interface AccessToken {

  'id'?: number;

  'name'?: string;

  'scopes'?: Array<string>;

  'sha1'?: string;

  'token_last_eight'?: string;
}

export interface Activity {

  'act_user'?: User;

  'act_user_id'?: number;

  'comment'?: Comment;

  'comment_id'?: number;

  'content'?: string;

  'created'?: string;

  'id'?: number;

  'is_private'?: boolean;

  'op_type'?: string;

  'ref_name'?: string;

  'repo'?: Repository;

  'repo_id'?: number;

  'user_id'?: number;
}

export interface ActivityPub {

  '@context'?: string;
}

export interface AddCollaboratorOption {

  'permission'?: string;
}

export interface AddTimeOption {

  'created'?: string;

  'time': number;

  'user_name'?: string;
}

export interface AnnotatedTag {

  'message'?: string;

  'object'?: AnnotatedTagObject;

  'sha'?: string;

  'tag'?: string;

  'tagger'?: CommitUser;

  'url'?: string;

  'verification'?: PayloadCommitVerification;
}

export interface AnnotatedTagObject {

  'sha'?: string;

  'type'?: string;

  'url'?: string;
}

export interface Attachment {

  'browser_download_url'?: string;

  'created_at'?: string;

  'download_count'?: number;

  'id'?: number;

  'name'?: string;

  'size'?: number;

  'uuid'?: string;
}

export interface Branch {

  'commit'?: PayloadCommit;

  'effective_branch_protection_name'?: string;

  'enable_status_check'?: boolean;

  'name'?: string;

  'protected'?: boolean;

  'required_approvals'?: number;

  'status_check_contexts'?: Array<string>;

  'user_can_merge'?: boolean;

  'user_can_push'?: boolean;
}

export interface BranchProtection {

  'approvals_whitelist_teams'?: Array<string>;

  'approvals_whitelist_username'?: Array<string>;

  'block_on_official_review_requests'?: boolean;

  'block_on_outdated_branch'?: boolean;

  'block_on_rejected_reviews'?: boolean;

  'branch_name'?: string;

  'created_at'?: string;

  'dismiss_stale_approvals'?: boolean;

  'enable_approvals_whitelist'?: boolean;

  'enable_merge_whitelist'?: boolean;

  'enable_push'?: boolean;

  'enable_push_whitelist'?: boolean;

  'enable_status_check'?: boolean;

  'merge_whitelist_teams'?: Array<string>;

  'merge_whitelist_usernames'?: Array<string>;

  'protected_file_patterns'?: string;

  'push_whitelist_deploy_keys'?: boolean;

  'push_whitelist_teams'?: Array<string>;

  'push_whitelist_usernames'?: Array<string>;

  'require_signed_commits'?: boolean;

  'required_approvals'?: number;

  'rule_name'?: string;

  'status_check_contexts'?: Array<string>;

  'unprotected_file_patterns'?: string;

  'updated_at'?: string;
}

export interface ChangeFileOperation {

  'content'?: string;

  'from_path'?: string;

  'operation': ChangeFileOperationOperationEnum;

  'path': string;

  'sha'?: string;
}

export const ChangeFileOperationOperationEnum = {
  create: 'create',
  update: 'update',
  delete: 'delete'
} as const

export type ChangeFileOperationOperationEnum = typeof ChangeFileOperationOperationEnum[keyof typeof ChangeFileOperationOperationEnum];


export interface ChangeFilesOptions {

  'author'?: Identity;

  'branch'?: string;

  'committer'?: Identity;

  'dates'?: CommitDateOptions;

  'files': Array<ChangeFileOperation>;

  'message'?: string;

  'new_branch'?: string;

  'signoff'?: boolean;
}

export interface ChangedFile {

  'additions'?: number;

  'changes'?: number;

  'contents_url'?: string;

  'deletions'?: number;

  'filename'?: string;

  'html_url'?: string;

  'previous_filename'?: string;

  'raw_url'?: string;

  'status'?: string;
}

export interface CombinedStatus {

  'commit_url'?: string;

  'repository'?: Repository;

  'sha'?: string;

  'state'?: string;

  'statuses'?: Array<CommitStatus>;

  'total_count'?: number;

  'url'?: string;
}

export interface Comment {

  'assets'?: Array<Attachment>;

  'body'?: string;

  'created_at'?: string;

  'html_url'?: string;

  'id'?: number;

  'issue_url'?: string;

  'original_author'?: string;

  'original_author_id'?: number;

  'pull_request_url'?: string;

  'updated_at'?: string;

  'user'?: User;
}

export interface Commit {

  'author'?: User;

  'commit'?: RepoCommit;

  'committer'?: User;

  'created'?: string;

  'files'?: Array<CommitAffectedFiles>;

  'html_url'?: string;

  'parents'?: Array<CommitMeta>;

  'sha'?: string;

  'stats'?: CommitStats;

  'url'?: string;
}

export interface CommitAffectedFiles {

  'filename'?: string;

  'status'?: string;
}

export interface CommitDateOptions {

  'author'?: string;

  'committer'?: string;
}

export interface CommitMeta {

  'created'?: string;

  'sha'?: string;

  'url'?: string;
}

export interface CommitStats {

  'additions'?: number;

  'deletions'?: number;

  'total'?: number;
}

export interface CommitStatus {

  'context'?: string;

  'created_at'?: string;

  'creator'?: User;

  'description'?: string;

  'id'?: number;

  'status'?: string;

  'target_url'?: string;

  'updated_at'?: string;

  'url'?: string;
}

export interface CommitUser {

  'date'?: string;

  'email'?: string;

  'name'?: string;
}

export interface ContentsResponse {

  '_links'?: FileLinksResponse;

  'content'?: string;

  'download_url'?: string;

  'encoding'?: string;

  'git_url'?: string;

  'html_url'?: string;

  'last_commit_sha'?: string;

  'name'?: string;

  'path'?: string;

  'sha'?: string;

  'size'?: number;

  'submodule_git_url'?: string;

  'target'?: string;

  'type'?: string;

  'url'?: string;
}

export interface CreateAccessTokenOption {

  'name': string;

  'scopes'?: Array<string>;
}

export interface CreateBranchProtectionOption {

  'approvals_whitelist_teams'?: Array<string>;

  'approvals_whitelist_username'?: Array<string>;

  'block_on_official_review_requests'?: boolean;

  'block_on_outdated_branch'?: boolean;

  'block_on_rejected_reviews'?: boolean;

  'branch_name'?: string;

  'dismiss_stale_approvals'?: boolean;

  'enable_approvals_whitelist'?: boolean;

  'enable_merge_whitelist'?: boolean;

  'enable_push'?: boolean;

  'enable_push_whitelist'?: boolean;

  'enable_status_check'?: boolean;

  'merge_whitelist_teams'?: Array<string>;

  'merge_whitelist_usernames'?: Array<string>;

  'protected_file_patterns'?: string;

  'push_whitelist_deploy_keys'?: boolean;

  'push_whitelist_teams'?: Array<string>;

  'push_whitelist_usernames'?: Array<string>;

  'require_signed_commits'?: boolean;

  'required_approvals'?: number;

  'rule_name'?: string;

  'status_check_contexts'?: Array<string>;

  'unprotected_file_patterns'?: string;
}

export interface CreateBranchRepoOption {

  'new_branch_name': string;

  'old_branch_name'?: string;

  'old_ref_name'?: string;
}

export interface CreateEmailOption {

  'emails'?: Array<string>;
}

export interface CreateFileOptions {

  'author'?: Identity;

  'branch'?: string;

  'committer'?: Identity;

  'content': string;

  'dates'?: CommitDateOptions;

  'message'?: string;

  'new_branch'?: string;

  'signoff'?: boolean;
}

export interface CreateForkOption {

  'name'?: string;

  'organization'?: string;
}

export interface CreateGPGKeyOption {

  'armored_public_key': string;

  'armored_signature'?: string;
}

export interface CreateHookOption {

  'active'?: boolean;

  'authorization_header'?: string;

  'branch_filter'?: string;

  'config': { [key: string]: string; };

  'events'?: Array<string>;

  'type': CreateHookOptionTypeEnum;
}

export const CreateHookOptionTypeEnum = {
  dingtalk: 'dingtalk',
  discord: 'discord',
  gitea: 'gitea',
  gogs: 'gogs',
  msteams: 'msteams',
  slack: 'slack',
  telegram: 'telegram',
  feishu: 'feishu',
  wechatwork: 'wechatwork',
  packagist: 'packagist'
} as const

export type CreateHookOptionTypeEnum = typeof CreateHookOptionTypeEnum[keyof typeof CreateHookOptionTypeEnum];


export interface CreateIssueCommentOption {

  'body': string;
}

export interface CreateIssueOption {

  'assignee'?: string;

  'assignees'?: Array<string>;

  'body'?: string;

  'closed'?: boolean;

  'due_date'?: string;

  'labels'?: Array<number>;

  'milestone'?: number;

  'ref'?: string;

  'title': string;
}

export interface CreateKeyOption {

  'key': string;

  'read_only'?: boolean;

  'title': string;
}

export interface CreateLabelOption {

  'color': string;

  'description'?: string;

  'exclusive'?: boolean;

  'is_archived'?: boolean;

  'name': string;
}

export interface CreateMilestoneOption {

  'description'?: string;

  'due_on'?: string;

  'state'?: CreateMilestoneOptionStateEnum;

  'title'?: string;
}

export const CreateMilestoneOptionStateEnum = {
  open: 'open',
  closed: 'closed'
} as const

export type CreateMilestoneOptionStateEnum = typeof CreateMilestoneOptionStateEnum[keyof typeof CreateMilestoneOptionStateEnum];


export interface CreateOAuth2ApplicationOptions {

  'confidential_client'?: boolean;

  'name'?: string;

  'redirect_uris'?: Array<string>;
}

export interface CreateOrUpdateSecretOption {

  'data': string;
}

export interface CreateOrgOption {

  'description'?: string;

  'email'?: string;

  'full_name'?: string;

  'location'?: string;

  'repo_admin_change_team_access'?: boolean;

  'username': string;

  'visibility'?: CreateOrgOptionVisibilityEnum;

  'website'?: string;
}

export const CreateOrgOptionVisibilityEnum = {
  public: 'public',
  limited: 'limited',
  private: 'private'
} as const

export type CreateOrgOptionVisibilityEnum = typeof CreateOrgOptionVisibilityEnum[keyof typeof CreateOrgOptionVisibilityEnum];


export interface CreatePullRequestOption {

  'assignee'?: string;

  'assignees'?: Array<string>;

  'base'?: string;

  'body'?: string;

  'due_date'?: string;

  'head'?: string;

  'labels'?: Array<number>;

  'milestone'?: number;

  'title'?: string;
}

export interface CreatePullReviewComment {

  'body'?: string;

  'new_position'?: number;

  'old_position'?: number;

  'path'?: string;
}

export interface CreatePullReviewOptions {

  'body'?: string;

  'comments'?: Array<CreatePullReviewComment>;

  'commit_id'?: string;

  'event'?: string;
}

export interface CreatePushMirrorOption {

  'interval'?: string;

  'remote_address'?: string;

  'remote_password'?: string;

  'remote_username'?: string;

  'sync_on_commit'?: boolean;
}

export interface CreateReleaseOption {

  'body'?: string;

  'draft'?: boolean;

  'name'?: string;

  'prerelease'?: boolean;

  'tag_name': string;

  'target_commitish'?: string;
}

export interface CreateRepoOption {

  'auto_init'?: boolean;

  'default_branch'?: string;

  'description'?: string;

  'gitignores'?: string;

  'issue_labels'?: string;

  'license'?: string;

  'name': string;

  'private'?: boolean;

  'readme'?: string;

  'template'?: boolean;

  'trust_model'?: CreateRepoOptionTrustModelEnum;
}

export const CreateRepoOptionTrustModelEnum = {
  default: 'default',
  collaborator: 'collaborator',
  committer: 'committer',
  collaboratorcommitter: 'collaboratorcommitter'
} as const

export type CreateRepoOptionTrustModelEnum = typeof CreateRepoOptionTrustModelEnum[keyof typeof CreateRepoOptionTrustModelEnum];


export interface CreateStatusOption {

  'context'?: string;

  'description'?: string;

  'state'?: string;

  'target_url'?: string;
}

export interface CreateTagOption {

  'message'?: string;

  'tag_name': string;

  'target'?: string;
}

export interface CreateTeamOption {

  'can_create_org_repo'?: boolean;

  'description'?: string;

  'includes_all_repositories'?: boolean;

  'name': string;

  'permission'?: CreateTeamOptionPermissionEnum;

  'units'?: Array<string>;

  'units_map'?: { [key: string]: string; };
}

export const CreateTeamOptionPermissionEnum = {
  read: 'read',
  write: 'write',
  admin: 'admin'
} as const

export type CreateTeamOptionPermissionEnum = typeof CreateTeamOptionPermissionEnum[keyof typeof CreateTeamOptionPermissionEnum];


export interface CreateUserOption {

  'created_at'?: string;

  'email': string;

  'full_name'?: string;

  'login_name'?: string;

  'must_change_password'?: boolean;

  'password': string;

  'restricted'?: boolean;

  'send_notify'?: boolean;

  'source_id'?: number;

  'username': string;

  'visibility'?: string;
}

export interface CreateWikiPageOptions {

  'content_base64'?: string;

  'message'?: string;

  'title'?: string;
}

export interface Cron {

  'exec_times'?: number;

  'name'?: string;

  'next'?: string;

  'prev'?: string;

  'schedule'?: string;
}

export interface DeleteEmailOption {

  'emails'?: Array<string>;
}

export interface DeleteFileOptions {

  'author'?: Identity;

  'branch'?: string;

  'committer'?: Identity;

  'dates'?: CommitDateOptions;

  'message'?: string;

  'new_branch'?: string;

  'sha': string;

  'signoff'?: boolean;
}

export interface DeployKey {

  'created_at'?: string;

  'fingerprint'?: string;

  'id'?: number;

  'key'?: string;

  'key_id'?: number;

  'read_only'?: boolean;

  'repository'?: Repository;

  'title'?: string;

  'url'?: string;
}

export interface DismissPullReviewOptions {

  'message'?: string;

  'priors'?: boolean;
}

export interface EditAttachmentOptions {

  'name'?: string;
}

export interface EditBranchProtectionOption {

  'approvals_whitelist_teams'?: Array<string>;

  'approvals_whitelist_username'?: Array<string>;

  'block_on_official_review_requests'?: boolean;

  'block_on_outdated_branch'?: boolean;

  'block_on_rejected_reviews'?: boolean;

  'dismiss_stale_approvals'?: boolean;

  'enable_approvals_whitelist'?: boolean;

  'enable_merge_whitelist'?: boolean;

  'enable_push'?: boolean;

  'enable_push_whitelist'?: boolean;

  'enable_status_check'?: boolean;

  'merge_whitelist_teams'?: Array<string>;

  'merge_whitelist_usernames'?: Array<string>;

  'protected_file_patterns'?: string;

  'push_whitelist_deploy_keys'?: boolean;

  'push_whitelist_teams'?: Array<string>;

  'push_whitelist_usernames'?: Array<string>;

  'require_signed_commits'?: boolean;

  'required_approvals'?: number;

  'status_check_contexts'?: Array<string>;

  'unprotected_file_patterns'?: string;
}

export interface EditDeadlineOption {

  'due_date': string;
}

export interface EditGitHookOption {

  'content'?: string;
}

export interface EditHookOption {

  'active'?: boolean;

  'authorization_header'?: string;

  'branch_filter'?: string;

  'config'?: { [key: string]: string; };

  'events'?: Array<string>;
}

export interface EditIssueCommentOption {

  'body': string;
}

export interface EditIssueOption {

  'assignee'?: string;

  'assignees'?: Array<string>;

  'body'?: string;

  'due_date'?: string;

  'milestone'?: number;

  'ref'?: string;

  'state'?: string;

  'title'?: string;

  'unset_due_date'?: boolean;
}

export interface EditLabelOption {

  'color'?: string;

  'description'?: string;

  'exclusive'?: boolean;

  'is_archived'?: boolean;

  'name'?: string;
}

export interface EditMilestoneOption {

  'description'?: string;

  'due_on'?: string;

  'state'?: string;

  'title'?: string;
}

export interface EditOrgOption {

  'description'?: string;

  'email'?: string;

  'full_name'?: string;

  'location'?: string;

  'repo_admin_change_team_access'?: boolean;

  'visibility'?: EditOrgOptionVisibilityEnum;

  'website'?: string;
}

export const EditOrgOptionVisibilityEnum = {
  public: 'public',
  limited: 'limited',
  private: 'private'
} as const

export type EditOrgOptionVisibilityEnum = typeof EditOrgOptionVisibilityEnum[keyof typeof EditOrgOptionVisibilityEnum];


export interface EditPullRequestOption {

  'allow_maintainer_edit'?: boolean;

  'assignee'?: string;

  'assignees'?: Array<string>;

  'base'?: string;

  'body'?: string;

  'due_date'?: string;

  'labels'?: Array<number>;

  'milestone'?: number;

  'state'?: string;

  'title'?: string;

  'unset_due_date'?: boolean;
}

export interface EditReactionOption {

  'content'?: string;
}

export interface EditReleaseOption {

  'body'?: string;

  'draft'?: boolean;

  'name'?: string;

  'prerelease'?: boolean;

  'tag_name'?: string;

  'target_commitish'?: string;
}

export interface EditRepoOption {

  'allow_manual_merge'?: boolean;

  'allow_merge_commits'?: boolean;

  'allow_rebase'?: boolean;

  'allow_rebase_explicit'?: boolean;

  'allow_rebase_update'?: boolean;

  'allow_squash_merge'?: boolean;

  'archived'?: boolean;

  'autodetect_manual_merge'?: boolean;

  'default_allow_maintainer_edit'?: boolean;

  'default_branch'?: string;

  'default_delete_branch_after_merge'?: boolean;

  'default_merge_style'?: string;

  'description'?: string;

  'enable_prune'?: boolean;

  'external_tracker'?: ExternalTracker;

  'external_wiki'?: ExternalWiki;

  'has_actions'?: boolean;

  'has_issues'?: boolean;

  'has_packages'?: boolean;

  'has_projects'?: boolean;

  'has_pull_requests'?: boolean;

  'has_releases'?: boolean;

  'has_wiki'?: boolean;

  'ignore_whitespace_conflicts'?: boolean;

  'internal_tracker'?: InternalTracker;

  'mirror_interval'?: string;

  'name'?: string;

  'private'?: boolean;

  'template'?: boolean;

  'website'?: string;
}

export interface EditTeamOption {

  'can_create_org_repo'?: boolean;

  'description'?: string;

  'includes_all_repositories'?: boolean;

  'name': string;

  'permission'?: EditTeamOptionPermissionEnum;

  'units'?: Array<string>;

  'units_map'?: { [key: string]: string; };
}

export const EditTeamOptionPermissionEnum = {
  read: 'read',
  write: 'write',
  admin: 'admin'
} as const

export type EditTeamOptionPermissionEnum = typeof EditTeamOptionPermissionEnum[keyof typeof EditTeamOptionPermissionEnum];


export interface EditUserOption {

  'active'?: boolean;

  'admin'?: boolean;

  'allow_create_organization'?: boolean;

  'allow_git_hook'?: boolean;

  'allow_import_local'?: boolean;

  'description'?: string;

  'email'?: string;

  'full_name'?: string;

  'location'?: string;

  'login_name': string;

  'max_repo_creation'?: number;

  'must_change_password'?: boolean;

  'password'?: string;

  'prohibit_login'?: boolean;

  'restricted'?: boolean;

  'source_id': number;

  'visibility'?: string;

  'website'?: string;
}

export interface Email {

  'email'?: string;

  'primary'?: boolean;

  'user_id'?: number;

  'username'?: string;

  'verified'?: boolean;
}

export interface ExternalTracker {

  'external_tracker_format'?: string;

  'external_tracker_regexp_pattern'?: string;

  'external_tracker_style'?: string;

  'external_tracker_url'?: string;
}

export interface ExternalWiki {

  'external_wiki_url'?: string;
}

export interface FileCommitResponse {

  'author'?: CommitUser;

  'committer'?: CommitUser;

  'created'?: string;

  'html_url'?: string;

  'message'?: string;

  'parents'?: Array<CommitMeta>;

  'sha'?: string;

  'tree'?: CommitMeta;

  'url'?: string;
}

export interface FileDeleteResponse {

  'commit'?: FileCommitResponse;

  'content'?: object;

  'verification'?: PayloadCommitVerification;
}

export interface FileLinksResponse {

  'git'?: string;

  'html'?: string;

  'self'?: string;
}

export interface FileResponse {

  'commit'?: FileCommitResponse;

  'content'?: ContentsResponse;

  'verification'?: PayloadCommitVerification;
}

export interface FilesResponse {

  'commit'?: FileCommitResponse;

  'files'?: Array<ContentsResponse>;

  'verification'?: PayloadCommitVerification;
}

export interface GPGKey {

  'can_certify'?: boolean;

  'can_encrypt_comms'?: boolean;

  'can_encrypt_storage'?: boolean;

  'can_sign'?: boolean;

  'created_at'?: string;

  'emails'?: Array<GPGKeyEmail>;

  'expires_at'?: string;

  'id'?: number;

  'key_id'?: string;

  'primary_key_id'?: string;

  'public_key'?: string;

  'subkeys'?: Array<GPGKey>;

  'verified'?: boolean;
}

export interface GPGKeyEmail {

  'email'?: string;

  'verified'?: boolean;
}

export interface GeneralAPISettings {

  'default_git_trees_per_page'?: number;

  'default_max_blob_size'?: number;

  'default_paging_num'?: number;

  'max_response_items'?: number;
}

export interface GeneralAttachmentSettings {

  'allowed_types'?: string;

  'enabled'?: boolean;

  'max_files'?: number;

  'max_size'?: number;
}

export interface GeneralRepoSettings {

  'http_git_disabled'?: boolean;

  'lfs_disabled'?: boolean;

  'migrations_disabled'?: boolean;

  'mirrors_disabled'?: boolean;

  'stars_disabled'?: boolean;

  'time_tracking_disabled'?: boolean;
}

export interface GeneralUISettings {

  'allowed_reactions'?: Array<string>;

  'custom_emojis'?: Array<string>;

  'default_theme'?: string;
}

export interface GenerateRepoOption {

  'avatar'?: boolean;

  'default_branch'?: string;

  'description'?: string;

  'git_content'?: boolean;

  'git_hooks'?: boolean;

  'labels'?: boolean;

  'name': string;

  'owner': string;

  'private'?: boolean;

  'protected_branch'?: boolean;

  'topics'?: boolean;

  'webhooks'?: boolean;
}

export interface GitBlobResponse {

  'content'?: string;

  'encoding'?: string;

  'sha'?: string;

  'size'?: number;

  'url'?: string;
}

export interface GitEntry {

  'mode'?: string;

  'path'?: string;

  'sha'?: string;

  'size'?: number;

  'type'?: string;

  'url'?: string;
}

export interface GitHook {

  'content'?: string;

  'is_active'?: boolean;

  'name'?: string;
}

export interface GitObject {

  'sha'?: string;

  'type'?: string;

  'url'?: string;
}

export interface GitTreeResponse {

  'page'?: number;

  'sha'?: string;

  'total_count'?: number;

  'tree'?: Array<GitEntry>;

  'truncated'?: boolean;

  'url'?: string;
}

export interface GitignoreTemplateInfo {

  'name'?: string;

  'source'?: string;
}

export interface Hook {

  'active'?: boolean;

  'authorization_header'?: string;

  'branch_filter'?: string;

  'config'?: { [key: string]: string; };

  'created_at'?: string;

  'events'?: Array<string>;

  'id'?: number;

  'type'?: string;

  'updated_at'?: string;
}

export interface Identity {

  'email'?: string;

  'name'?: string;
}

export interface InternalTracker {

  'allow_only_contributors_to_track_time'?: boolean;

  'enable_issue_dependencies'?: boolean;

  'enable_time_tracker'?: boolean;
}

export interface Issue {

  'assets'?: Array<Attachment>;

  'assignee'?: User;

  'assignees'?: Array<User>;

  'body'?: string;

  'closed_at'?: string;

  'comments'?: number;

  'created_at'?: string;

  'due_date'?: string;

  'html_url'?: string;

  'id'?: number;

  'is_locked'?: boolean;

  'labels'?: Array<Label>;

  'milestone'?: Milestone;

  'number'?: number;

  'original_author'?: string;

  'original_author_id'?: number;

  'pin_order'?: number;

  'pull_request'?: PullRequestMeta;

  'ref'?: string;

  'repository'?: RepositoryMeta;

  'state'?: string;

  'title'?: string;

  'updated_at'?: string;

  'url'?: string;

  'user'?: User;
}

export interface IssueConfig {

  'blank_issues_enabled'?: boolean;

  'contact_links'?: Array<IssueConfigContactLink>;
}

export interface IssueConfigContactLink {

  'about'?: string;

  'name'?: string;

  'url'?: string;
}

export interface IssueConfigValidation {

  'message'?: string;

  'valid'?: boolean;
}

export interface IssueDeadline {

  'due_date'?: string;
}

export interface IssueFormField {

  'attributes'?: { [key: string]: object; };

  'id'?: string;

  'type'?: string;

  'validations'?: { [key: string]: object; };
}

export interface IssueLabelsOption {

  'labels'?: Array<number>;
}

export interface IssueMeta {

  'index'?: number;

  'owner'?: string;

  'repo'?: string;
}

export interface IssueTemplate {

  'about'?: string;

  'body'?: Array<IssueFormField>;

  'content'?: string;

  'file_name'?: string;

  'labels'?: Array<string>;

  'name'?: string;

  'ref'?: string;

  'title'?: string;
}

export interface Label {

  'color'?: string;

  'description'?: string;

  'exclusive'?: boolean;

  'id'?: number;

  'is_archived'?: boolean;

  'name'?: string;

  'url'?: string;
}

export interface LabelTemplate {

  'color'?: string;

  'description'?: string;

  'exclusive'?: boolean;

  'name'?: string;
}

export interface LicenseTemplateInfo {

  'body'?: string;

  'implementation'?: string;

  'key'?: string;

  'name'?: string;

  'url'?: string;
}

export interface LicensesTemplateListEntry {

  'key'?: string;

  'name'?: string;

  'url'?: string;
}

export interface MarkdownOption {

  'Context'?: string;

  'Mode'?: string;

  'Text'?: string;

  'Wiki'?: boolean;
}

export interface MarkupOption {

  'Context'?: string;

  'FilePath'?: string;

  'Mode'?: string;

  'Text'?: string;

  'Wiki'?: boolean;
}

export interface MergePullRequestOption {

  'Do': MergePullRequestOptionDoEnum;

  'MergeCommitID'?: string;

  'MergeMessageField'?: string;

  'MergeTitleField'?: string;

  'delete_branch_after_merge'?: boolean;

  'force_merge'?: boolean;

  'head_commit_id'?: string;

  'merge_when_checks_succeed'?: boolean;
}

export const MergePullRequestOptionDoEnum = {
  merge: 'merge',
  rebase: 'rebase',
  rebase_merge: 'rebase-merge',
  squash: 'squash',
  manually_merged: 'manually-merged'
} as const

export type MergePullRequestOptionDoEnum = typeof MergePullRequestOptionDoEnum[keyof typeof MergePullRequestOptionDoEnum];


export interface MigrateRepoOptions {

  'auth_password'?: string;

  'auth_token'?: string;

  'auth_username'?: string;

  'clone_addr': string;

  'description'?: string;

  'issues'?: boolean;

  'labels'?: boolean;

  'lfs'?: boolean;

  'lfs_endpoint'?: string;

  'milestones'?: boolean;

  'mirror'?: boolean;

  'mirror_interval'?: string;

  'private'?: boolean;

  'pull_requests'?: boolean;

  'releases'?: boolean;

  'repo_name': string;

  'repo_owner'?: string;

  'service'?: MigrateRepoOptionsServiceEnum;

  'uid'?: number;

  'wiki'?: boolean;
}

export const MigrateRepoOptionsServiceEnum = {
  git: 'git',
  github: 'github',
  gitea: 'gitea',
  gitlab: 'gitlab',
  gogs: 'gogs',
  onedev: 'onedev',
  gitbucket: 'gitbucket',
  codebase: 'codebase'
} as const

export type MigrateRepoOptionsServiceEnum = typeof MigrateRepoOptionsServiceEnum[keyof typeof MigrateRepoOptionsServiceEnum];


export interface Milestone {

  'closed_at'?: string;

  'closed_issues'?: number;

  'created_at'?: string;

  'description'?: string;

  'due_on'?: string;

  'id'?: number;

  'open_issues'?: number;

  'state'?: string;

  'title'?: string;

  'updated_at'?: string;
}

export interface NewIssuePinsAllowed {

  'issues'?: boolean;

  'pull_requests'?: boolean;
}

export interface NodeInfo {

  'metadata'?: object;

  'openRegistrations'?: boolean;

  'protocols'?: Array<string>;

  'services'?: NodeInfoServices;

  'software'?: NodeInfoSoftware;

  'usage'?: NodeInfoUsage;

  'version'?: string;
}

export interface NodeInfoServices {

  'inbound'?: Array<string>;

  'outbound'?: Array<string>;
}

export interface NodeInfoSoftware {

  'homepage'?: string;

  'name'?: string;

  'repository'?: string;

  'version'?: string;
}

export interface NodeInfoUsage {

  'localComments'?: number;

  'localPosts'?: number;

  'users'?: NodeInfoUsageUsers;
}

export interface NodeInfoUsageUsers {

  'activeHalfyear'?: number;

  'activeMonth'?: number;

  'total'?: number;
}

export interface Note {

  'commit'?: Commit;

  'message'?: string;
}

export interface NotificationCount {

  'new'?: number;
}

export interface NotificationSubject {

  'html_url'?: string;

  'latest_comment_html_url'?: string;

  'latest_comment_url'?: string;

  'state'?: string;

  'title'?: string;

  'type'?: string;

  'url'?: string;
}

export interface NotificationThread {

  'id'?: number;

  'pinned'?: boolean;

  'repository'?: Repository;

  'subject'?: NotificationSubject;

  'unread'?: boolean;

  'updated_at'?: string;

  'url'?: string;
}

export interface OAuth2Application {

  'client_id'?: string;

  'client_secret'?: string;

  'confidential_client'?: boolean;

  'created'?: string;

  'id'?: number;

  'name'?: string;

  'redirect_uris'?: Array<string>;
}

export interface Organization {

  'avatar_url'?: string;

  'description'?: string;

  'email'?: string;

  'full_name'?: string;

  'id'?: number;

  'location'?: string;

  'name'?: string;

  'repo_admin_change_team_access'?: boolean;

  'username'?: string;

  'visibility'?: string;

  'website'?: string;
}

export interface OrganizationPermissions {

  'can_create_repository'?: boolean;

  'can_read'?: boolean;

  'can_write'?: boolean;

  'is_admin'?: boolean;

  'is_owner'?: boolean;
}

export interface PRBranchInfo {

  'label'?: string;

  'ref'?: string;

  'repo'?: Repository;

  'repo_id'?: number;

  'sha'?: string;
}

export interface Package {

  'created_at'?: string;

  'creator'?: User;

  'id'?: number;

  'name'?: string;

  'owner'?: User;

  'repository'?: Repository;

  'type'?: string;

  'version'?: string;
}

export interface PackageFile {

  'Size'?: number;

  'id'?: number;

  'md5'?: string;

  'name'?: string;

  'sha1'?: string;

  'sha256'?: string;

  'sha512'?: string;
}

export interface PayloadCommit {

  'added'?: Array<string>;

  'author'?: PayloadUser;

  'committer'?: PayloadUser;

  'id'?: string;

  'message'?: string;

  'modified'?: Array<string>;

  'removed'?: Array<string>;

  'timestamp'?: string;

  'url'?: string;

  'verification'?: PayloadCommitVerification;
}

export interface PayloadCommitVerification {

  'payload'?: string;

  'reason'?: string;

  'signature'?: string;

  'signer'?: PayloadUser;

  'verified'?: boolean;
}

export interface PayloadUser {

  'email'?: string;

  'name'?: string;

  'username'?: string;
}

export interface Permission {

  'admin'?: boolean;

  'pull'?: boolean;

  'push'?: boolean;
}

export interface PublicKey {

  'created_at'?: string;

  'fingerprint'?: string;

  'id'?: number;

  'key'?: string;

  'key_type'?: string;

  'read_only'?: boolean;

  'title'?: string;

  'url'?: string;

  'user'?: User;
}

export interface PullRequest {

  'allow_maintainer_edit'?: boolean;

  'assignee'?: User;

  'assignees'?: Array<User>;

  'base'?: PRBranchInfo;

  'body'?: string;

  'closed_at'?: string;

  'comments'?: number;

  'created_at'?: string;

  'diff_url'?: string;

  'due_date'?: string;

  'head'?: PRBranchInfo;

  'html_url'?: string;

  'id'?: number;

  'is_locked'?: boolean;

  'labels'?: Array<Label>;

  'merge_base'?: string;

  'merge_commit_sha'?: string;

  'mergeable'?: boolean;

  'merged'?: boolean;

  'merged_at'?: string;

  'merged_by'?: User;

  'milestone'?: Milestone;

  'number'?: number;

  'patch_url'?: string;

  'pin_order'?: number;

  'requested_reviewers'?: Array<User>;

  'state'?: string;

  'title'?: string;

  'updated_at'?: string;

  'url'?: string;

  'user'?: User;
}

export interface PullRequestMeta {

  'merged'?: boolean;

  'merged_at'?: string;
}

export interface PullReview {

  'body'?: string;

  'comments_count'?: number;

  'commit_id'?: string;

  'dismissed'?: boolean;

  'html_url'?: string;

  'id'?: number;

  'official'?: boolean;

  'pull_request_url'?: string;

  'stale'?: boolean;

  'state'?: string;

  'submitted_at'?: string;

  'team'?: Team;

  'updated_at'?: string;

  'user'?: User;
}

export interface PullReviewComment {

  'body'?: string;

  'commit_id'?: string;

  'created_at'?: string;

  'diff_hunk'?: string;

  'html_url'?: string;

  'id'?: number;

  'original_commit_id'?: string;

  'original_position'?: number;

  'path'?: string;

  'position'?: number;

  'pull_request_review_id'?: number;

  'pull_request_url'?: string;

  'resolver'?: User;

  'updated_at'?: string;

  'user'?: User;
}

export interface PullReviewRequestOptions {

  'reviewers'?: Array<string>;

  'team_reviewers'?: Array<string>;
}

export interface PushMirror {

  'created'?: string;

  'interval'?: string;

  'last_error'?: string;

  'last_update'?: string;

  'remote_address'?: string;

  'remote_name'?: string;

  'repo_name'?: string;

  'sync_on_commit'?: boolean;
}

export interface Reaction {

  'content'?: string;

  'created_at'?: string;

  'user'?: User;
}

export interface Reference {

  'object'?: GitObject;

  'ref'?: string;

  'url'?: string;
}

export interface Release {

  'assets'?: Array<Attachment>;

  'author'?: User;

  'body'?: string;

  'created_at'?: string;

  'draft'?: boolean;

  'html_url'?: string;

  'id'?: number;

  'name'?: string;

  'prerelease'?: boolean;

  'published_at'?: string;

  'tag_name'?: string;

  'tarball_url'?: string;

  'target_commitish'?: string;

  'upload_url'?: string;

  'url'?: string;

  'zipball_url'?: string;
}

export interface RenameUserOption {

  'new_username': string;
}

export interface RepoCollaboratorPermission {

  'permission'?: string;

  'role_name'?: string;

  'user'?: User;
}

export interface RepoCommit {

  'author'?: CommitUser;

  'committer'?: CommitUser;

  'message'?: string;

  'tree'?: CommitMeta;

  'url'?: string;

  'verification'?: PayloadCommitVerification;
}

export interface RepoTopicOptions {

  'topics'?: Array<string>;
}

export interface RepoTransfer {

  'doer'?: User;

  'recipient'?: User;

  'teams'?: Array<Team>;
}

export interface Repository {

  'allow_merge_commits'?: boolean;

  'allow_rebase'?: boolean;

  'allow_rebase_explicit'?: boolean;

  'allow_rebase_update'?: boolean;

  'allow_squash_merge'?: boolean;

  'archived'?: boolean;

  'archived_at'?: string;

  'avatar_url'?: string;

  'clone_url'?: string;

  'created_at'?: string;

  'default_allow_maintainer_edit'?: boolean;

  'default_branch'?: string;

  'default_delete_branch_after_merge'?: boolean;

  'default_merge_style'?: string;

  'description'?: string;

  'empty'?: boolean;

  'external_tracker'?: ExternalTracker;

  'external_wiki'?: ExternalWiki;

  'fork'?: boolean;

  'forks_count'?: number;

  'full_name'?: string;

  'has_actions'?: boolean;

  'has_issues'?: boolean;

  'has_packages'?: boolean;

  'has_projects'?: boolean;

  'has_pull_requests'?: boolean;

  'has_releases'?: boolean;

  'has_wiki'?: boolean;

  'html_url'?: string;

  'id'?: number;

  'ignore_whitespace_conflicts'?: boolean;

  'internal'?: boolean;

  'internal_tracker'?: InternalTracker;

  'language'?: string;

  'languages_url'?: string;

  'link'?: string;

  'mirror'?: boolean;

  'mirror_interval'?: string;

  'mirror_updated'?: string;

  'name'?: string;

  'open_issues_count'?: number;

  'open_pr_counter'?: number;

  'original_url'?: string;

  'owner'?: User;

  'parent'?: Repository;

  'permissions'?: Permission;

  'private'?: boolean;

  'release_counter'?: number;

  'repo_transfer'?: RepoTransfer;

  'size'?: number;

  'ssh_url'?: string;

  'stars_count'?: number;

  'template'?: boolean;

  'updated_at'?: string;

  'url'?: string;

  'watchers_count'?: number;

  'website'?: string;
}

export interface RepositoryMeta {

  'full_name'?: string;

  'id'?: number;

  'name'?: string;

  'owner'?: string;
}

export interface SearchResults {

  'data'?: Array<Repository>;

  'ok'?: boolean;
}

export interface Secret {

  'created_at'?: string;

  'name'?: string;
}

export interface ServerVersion {

  'version'?: string;
}

export interface StopWatch {

  'created'?: string;

  'duration'?: string;

  'issue_index'?: number;

  'issue_title'?: string;

  'repo_name'?: string;

  'repo_owner_name'?: string;

  'seconds'?: number;
}

export interface SubmitPullReviewOptions {

  'body'?: string;

  'event'?: string;
}

export interface Tag {

  'commit'?: CommitMeta;

  'id'?: string;

  'message'?: string;

  'name'?: string;

  'tarball_url'?: string;

  'zipball_url'?: string;
}

export interface Team {

  'can_create_org_repo'?: boolean;

  'description'?: string;

  'id'?: number;

  'includes_all_repositories'?: boolean;

  'name'?: string;

  'organization'?: Organization;

  'permission'?: TeamPermissionEnum;

  'units'?: Array<string>;

  'units_map'?: { [key: string]: string; };
}

export const TeamPermissionEnum = {
  none: 'none',
  read: 'read',
  write: 'write',
  admin: 'admin',
  owner: 'owner'
} as const

export type TeamPermissionEnum = typeof TeamPermissionEnum[keyof typeof TeamPermissionEnum];


export interface TimelineComment {

  'assignee'?: User;

  'assignee_team'?: Team;

  'body'?: string;

  'created_at'?: string;

  'dependent_issue'?: Issue;

  'html_url'?: string;

  'id'?: number;

  'issue_url'?: string;

  'label'?: Label;

  'milestone'?: Milestone;

  'new_ref'?: string;

  'new_title'?: string;

  'old_milestone'?: Milestone;

  'old_project_id'?: number;

  'old_ref'?: string;

  'old_title'?: string;

  'project_id'?: number;

  'pull_request_url'?: string;

  'ref_action'?: string;

  'ref_comment'?: Comment;

  'ref_commit_sha'?: string;

  'ref_issue'?: Issue;

  'removed_assignee'?: boolean;

  'resolve_doer'?: User;

  'review_id'?: number;

  'tracked_time'?: TrackedTime;

  'type'?: string;

  'updated_at'?: string;

  'user'?: User;
}

export interface TopicName {

  'topics'?: Array<string>;
}

export interface TopicResponse {

  'created'?: string;

  'id'?: number;

  'repo_count'?: number;

  'topic_name'?: string;

  'updated'?: string;
}

export interface TrackedTime {

  'created'?: string;

  'id'?: number;

  'issue'?: Issue;

  'issue_id'?: number;

  'time'?: number;

  'user_id'?: number;

  'user_name'?: string;
}

export interface TransferRepoOption {

  'new_owner': string;

  'team_ids'?: Array<number>;
}

export interface UpdateFileOptions {

  'author'?: Identity;

  'branch'?: string;

  'committer'?: Identity;

  'content': string;

  'dates'?: CommitDateOptions;

  'from_path'?: string;

  'message'?: string;

  'new_branch'?: string;

  'sha': string;

  'signoff'?: boolean;
}

export interface UpdateRepoAvatarOption {

  'image'?: string;
}

export interface UpdateUserAvatarOption {

  'image'?: string;
}

export interface User {

  'active'?: boolean;

  'avatar_url'?: string;

  'created'?: string;

  'description'?: string;

  'email'?: string;

  'followers_count'?: number;

  'following_count'?: number;

  'full_name'?: string;

  'id'?: number;

  'is_admin'?: boolean;

  'language'?: string;

  'last_login'?: string;

  'location'?: string;

  'login'?: string;

  'login_name'?: string;

  'prohibit_login'?: boolean;

  'restricted'?: boolean;

  'starred_repos_count'?: number;

  'visibility'?: string;

  'website'?: string;
}

export interface UserHeatmapData {

  'contributions'?: number;

  'timestamp'?: number;
}

export interface UserSettings {

  'description'?: string;

  'diff_view_style'?: string;

  'full_name'?: string;

  'hide_activity'?: boolean;

  'hide_email'?: boolean;

  'language'?: string;

  'location'?: string;

  'theme'?: string;

  'website'?: string;
}

export interface UserSettingsOptions {

  'description'?: string;

  'diff_view_style'?: string;

  'full_name'?: string;

  'hide_activity'?: boolean;

  'hide_email'?: boolean;

  'language'?: string;

  'location'?: string;

  'theme'?: string;

  'website'?: string;
}

export interface WatchInfo {

  'created_at'?: string;

  'ignored'?: boolean;

  'reason'?: object;

  'repository_url'?: string;

  'subscribed'?: boolean;

  'url'?: string;
}

export interface WikiCommit {

  'author'?: CommitUser;

  'commiter'?: CommitUser;

  'message'?: string;

  'sha'?: string;
}

export interface WikiCommitList {

  'commits'?: Array<WikiCommit>;

  'count'?: number;
}

export interface WikiPage {

  'commit_count'?: number;

  'content_base64'?: string;

  'footer'?: string;

  'html_url'?: string;

  'last_commit'?: WikiCommit;

  'sidebar'?: string;

  'sub_url'?: string;

  'title'?: string;
}

export interface WikiPageMetaData {

  'html_url'?: string;

  'last_commit'?: WikiCommit;

  'sub_url'?: string;

  'title'?: string;
}


export const RepositoryApiAxiosParamCreator = function(configuration?: Configuration) {
  return {

    repoChangeFiles: async (owner: string, repo: string, body: ChangeFilesOptions, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
      // verify required parameter 'owner' is not null or undefined
      assertParamExists('repoChangeFiles', 'owner', owner)
      // verify required parameter 'repo' is not null or undefined
      assertParamExists('repoChangeFiles', 'repo', repo)
      // verify required parameter 'body' is not null or undefined
      assertParamExists('repoChangeFiles', 'body', body)
      const localVarPath = `/repos/{owner}/{repo}/contents`
        .replace(`{${'owner'}}`, encodeURIComponent(String(owner)))
        .replace(`{${'repo'}}`, encodeURIComponent(String(repo)))
      // use dummy base URL string because the URL constructor only accepts absolute URLs.
      const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL)
      let baseOptions
      if (configuration) {
        baseOptions = configuration.baseOptions
      }

      const localVarRequestOptions = { method: 'POST', ...baseOptions, ...options }
      const localVarHeaderParameter = {} as any
      const localVarQueryParameter = {} as any

      // authentication TOTPHeader required
      await setApiKeyToObject(localVarHeaderParameter, 'X-GITEA-OTP', configuration)

      // authentication AuthorizationHeaderToken required
      await setApiKeyToObject(localVarHeaderParameter, 'Authorization', configuration)

      // authentication SudoHeader required
      await setApiKeyToObject(localVarHeaderParameter, 'Sudo', configuration)

      // authentication BasicAuth required
      // http basic authentication required
      setBasicAuthToObject(localVarRequestOptions, configuration)

      // authentication AccessToken required
      await setApiKeyToObject(localVarQueryParameter, 'access_token', configuration)

      // authentication SudoParam required
      await setApiKeyToObject(localVarQueryParameter, 'sudo', configuration)

      // authentication Token required
      await setApiKeyToObject(localVarQueryParameter, 'token', configuration)


      localVarHeaderParameter['Content-Type'] = 'application/json'

      setSearchParams(localVarUrlObj, localVarQueryParameter)
      let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {}
      localVarRequestOptions.headers = { ...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers }
      localVarRequestOptions.data = serializeDataIfNeeded(body, localVarRequestOptions, configuration)

      return {
        url: toPathString(localVarUrlObj),
        options: localVarRequestOptions
      }
    },

    repoCreateBranch: async (owner: string, repo: string, body?: CreateBranchRepoOption, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
      // verify required parameter 'owner' is not null or undefined
      assertParamExists('repoCreateBranch', 'owner', owner)
      // verify required parameter 'repo' is not null or undefined
      assertParamExists('repoCreateBranch', 'repo', repo)
      const localVarPath = `/repos/{owner}/{repo}/branches`
        .replace(`{${'owner'}}`, encodeURIComponent(String(owner)))
        .replace(`{${'repo'}}`, encodeURIComponent(String(repo)))
      // use dummy base URL string because the URL constructor only accepts absolute URLs.
      const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL)
      let baseOptions
      if (configuration) {
        baseOptions = configuration.baseOptions
      }

      const localVarRequestOptions = { method: 'POST', ...baseOptions, ...options }
      const localVarHeaderParameter = {} as any
      const localVarQueryParameter = {} as any

      // authentication TOTPHeader required
      await setApiKeyToObject(localVarHeaderParameter, 'X-GITEA-OTP', configuration)

      // authentication AuthorizationHeaderToken required
      await setApiKeyToObject(localVarHeaderParameter, 'Authorization', configuration)

      // authentication SudoHeader required
      await setApiKeyToObject(localVarHeaderParameter, 'Sudo', configuration)

      // authentication BasicAuth required
      // http basic authentication required
      setBasicAuthToObject(localVarRequestOptions, configuration)

      // authentication AccessToken required
      await setApiKeyToObject(localVarQueryParameter, 'access_token', configuration)

      // authentication SudoParam required
      await setApiKeyToObject(localVarQueryParameter, 'sudo', configuration)

      // authentication Token required
      await setApiKeyToObject(localVarQueryParameter, 'token', configuration)


      localVarHeaderParameter['Content-Type'] = 'application/json'

      setSearchParams(localVarUrlObj, localVarQueryParameter)
      let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {}
      localVarRequestOptions.headers = { ...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers }
      localVarRequestOptions.data = serializeDataIfNeeded(body, localVarRequestOptions, configuration)

      return {
        url: toPathString(localVarUrlObj),
        options: localVarRequestOptions
      }
    },

    repoCreateFile: async (owner: string, repo: string, filepath: string, body: CreateFileOptions, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
      // verify required parameter 'owner' is not null or undefined
      assertParamExists('repoCreateFile', 'owner', owner)
      // verify required parameter 'repo' is not null or undefined
      assertParamExists('repoCreateFile', 'repo', repo)
      // verify required parameter 'filepath' is not null or undefined
      assertParamExists('repoCreateFile', 'filepath', filepath)
      // verify required parameter 'body' is not null or undefined
      assertParamExists('repoCreateFile', 'body', body)
      const localVarPath = `/repos/{owner}/{repo}/contents/{filepath}`
        .replace(`{${'owner'}}`, encodeURIComponent(String(owner)))
        .replace(`{${'repo'}}`, encodeURIComponent(String(repo)))
        .replace(`{${'filepath'}}`, encodeURIComponent(String(filepath)))
      // use dummy base URL string because the URL constructor only accepts absolute URLs.
      const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL)
      let baseOptions
      if (configuration) {
        baseOptions = configuration.baseOptions
      }

      const localVarRequestOptions = { method: 'POST', ...baseOptions, ...options }
      const localVarHeaderParameter = {} as any
      const localVarQueryParameter = {} as any

      // authentication TOTPHeader required
      await setApiKeyToObject(localVarHeaderParameter, 'X-GITEA-OTP', configuration)

      // authentication AuthorizationHeaderToken required
      await setApiKeyToObject(localVarHeaderParameter, 'Authorization', configuration)

      // authentication SudoHeader required
      await setApiKeyToObject(localVarHeaderParameter, 'Sudo', configuration)

      // authentication BasicAuth required
      // http basic authentication required
      setBasicAuthToObject(localVarRequestOptions, configuration)

      // authentication AccessToken required
      await setApiKeyToObject(localVarQueryParameter, 'access_token', configuration)

      // authentication SudoParam required
      await setApiKeyToObject(localVarQueryParameter, 'sudo', configuration)

      // authentication Token required
      await setApiKeyToObject(localVarQueryParameter, 'token', configuration)


      localVarHeaderParameter['Content-Type'] = 'application/json'

      setSearchParams(localVarUrlObj, localVarQueryParameter)
      let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {}
      localVarRequestOptions.headers = { ...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers }
      localVarRequestOptions.data = serializeDataIfNeeded(body, localVarRequestOptions, configuration)

      return {
        url: toPathString(localVarUrlObj),
        options: localVarRequestOptions
      }
    },

    repoDeleteBranch: async (owner: string, repo: string, branch: string, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
      // verify required parameter 'owner' is not null or undefined
      assertParamExists('repoDeleteBranch', 'owner', owner)
      // verify required parameter 'repo' is not null or undefined
      assertParamExists('repoDeleteBranch', 'repo', repo)
      // verify required parameter 'branch' is not null or undefined
      assertParamExists('repoDeleteBranch', 'branch', branch)
      const localVarPath = `/repos/{owner}/{repo}/branches/{branch}`
        .replace(`{${'owner'}}`, encodeURIComponent(String(owner)))
        .replace(`{${'repo'}}`, encodeURIComponent(String(repo)))
        .replace(`{${'branch'}}`, encodeURIComponent(String(branch)))
      // use dummy base URL string because the URL constructor only accepts absolute URLs.
      const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL)
      let baseOptions
      if (configuration) {
        baseOptions = configuration.baseOptions
      }

      const localVarRequestOptions = { method: 'DELETE', ...baseOptions, ...options }
      const localVarHeaderParameter = {} as any
      const localVarQueryParameter = {} as any

      // authentication TOTPHeader required
      await setApiKeyToObject(localVarHeaderParameter, 'X-GITEA-OTP', configuration)

      // authentication AuthorizationHeaderToken required
      await setApiKeyToObject(localVarHeaderParameter, 'Authorization', configuration)

      // authentication SudoHeader required
      await setApiKeyToObject(localVarHeaderParameter, 'Sudo', configuration)

      // authentication BasicAuth required
      // http basic authentication required
      setBasicAuthToObject(localVarRequestOptions, configuration)

      // authentication AccessToken required
      await setApiKeyToObject(localVarQueryParameter, 'access_token', configuration)

      // authentication SudoParam required
      await setApiKeyToObject(localVarQueryParameter, 'sudo', configuration)

      // authentication Token required
      await setApiKeyToObject(localVarQueryParameter, 'token', configuration)


      setSearchParams(localVarUrlObj, localVarQueryParameter)
      let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {}
      localVarRequestOptions.headers = { ...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers }

      return {
        url: toPathString(localVarUrlObj),
        options: localVarRequestOptions
      }
    },

    repoDeleteFile: async (owner: string, repo: string, filepath: string, body: DeleteFileOptions, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
      // verify required parameter 'owner' is not null or undefined
      assertParamExists('repoDeleteFile', 'owner', owner)
      // verify required parameter 'repo' is not null or undefined
      assertParamExists('repoDeleteFile', 'repo', repo)
      // verify required parameter 'filepath' is not null or undefined
      assertParamExists('repoDeleteFile', 'filepath', filepath)
      // verify required parameter 'body' is not null or undefined
      assertParamExists('repoDeleteFile', 'body', body)
      const localVarPath = `/repos/{owner}/{repo}/contents/{filepath}`
        .replace(`{${'owner'}}`, encodeURIComponent(String(owner)))
        .replace(`{${'repo'}}`, encodeURIComponent(String(repo)))
        .replace(`{${'filepath'}}`, encodeURIComponent(String(filepath)))
      // use dummy base URL string because the URL constructor only accepts absolute URLs.
      const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL)
      let baseOptions
      if (configuration) {
        baseOptions = configuration.baseOptions
      }

      const localVarRequestOptions = { method: 'DELETE', ...baseOptions, ...options }
      const localVarHeaderParameter = {} as any
      const localVarQueryParameter = {} as any

      // authentication TOTPHeader required
      await setApiKeyToObject(localVarHeaderParameter, 'X-GITEA-OTP', configuration)

      // authentication AuthorizationHeaderToken required
      await setApiKeyToObject(localVarHeaderParameter, 'Authorization', configuration)

      // authentication SudoHeader required
      await setApiKeyToObject(localVarHeaderParameter, 'Sudo', configuration)

      // authentication BasicAuth required
      // http basic authentication required
      setBasicAuthToObject(localVarRequestOptions, configuration)

      // authentication AccessToken required
      await setApiKeyToObject(localVarQueryParameter, 'access_token', configuration)

      // authentication SudoParam required
      await setApiKeyToObject(localVarQueryParameter, 'sudo', configuration)

      // authentication Token required
      await setApiKeyToObject(localVarQueryParameter, 'token', configuration)


      localVarHeaderParameter['Content-Type'] = 'application/json'

      setSearchParams(localVarUrlObj, localVarQueryParameter)
      let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {}
      localVarRequestOptions.headers = { ...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers }
      localVarRequestOptions.data = serializeDataIfNeeded(body, localVarRequestOptions, configuration)

      return {
        url: toPathString(localVarUrlObj),
        options: localVarRequestOptions
      }
    },

    repoGetAllCommits: async (owner: string, repo: string, sha?: string, path?: string, stat?: boolean, verification?: boolean, files?: boolean, page?: number, limit?: number, not?: string, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
      // verify required parameter 'owner' is not null or undefined
      assertParamExists('repoGetAllCommits', 'owner', owner)
      // verify required parameter 'repo' is not null or undefined
      assertParamExists('repoGetAllCommits', 'repo', repo)
      const localVarPath = `/repos/{owner}/{repo}/commits`
        .replace(`{${'owner'}}`, encodeURIComponent(String(owner)))
        .replace(`{${'repo'}}`, encodeURIComponent(String(repo)))
      // use dummy base URL string because the URL constructor only accepts absolute URLs.
      const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL)
      let baseOptions
      if (configuration) {
        baseOptions = configuration.baseOptions
      }

      const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options }
      const localVarHeaderParameter = {} as any
      const localVarQueryParameter = {} as any

      // authentication TOTPHeader required
      await setApiKeyToObject(localVarHeaderParameter, 'X-GITEA-OTP', configuration)

      // authentication AuthorizationHeaderToken required
      await setApiKeyToObject(localVarHeaderParameter, 'Authorization', configuration)

      // authentication SudoHeader required
      await setApiKeyToObject(localVarHeaderParameter, 'Sudo', configuration)

      // authentication BasicAuth required
      // http basic authentication required
      setBasicAuthToObject(localVarRequestOptions, configuration)

      // authentication AccessToken required
      await setApiKeyToObject(localVarQueryParameter, 'access_token', configuration)

      // authentication SudoParam required
      await setApiKeyToObject(localVarQueryParameter, 'sudo', configuration)

      // authentication Token required
      await setApiKeyToObject(localVarQueryParameter, 'token', configuration)

      if (sha !== undefined) {
        localVarQueryParameter['sha'] = sha
      }

      if (path !== undefined) {
        localVarQueryParameter['path'] = path
      }

      if (stat !== undefined) {
        localVarQueryParameter['stat'] = stat
      }

      if (verification !== undefined) {
        localVarQueryParameter['verification'] = verification
      }

      if (files !== undefined) {
        localVarQueryParameter['files'] = files
      }

      if (page !== undefined) {
        localVarQueryParameter['page'] = page
      }

      if (limit !== undefined) {
        localVarQueryParameter['limit'] = limit
      }

      if (not !== undefined) {
        localVarQueryParameter['not'] = not
      }


      setSearchParams(localVarUrlObj, localVarQueryParameter)
      let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {}
      localVarRequestOptions.headers = { ...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers }

      return {
        url: toPathString(localVarUrlObj),
        options: localVarRequestOptions
      }
    },

    repoGetBranch: async (owner: string, repo: string, branch: string, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
      // verify required parameter 'owner' is not null or undefined
      assertParamExists('repoGetBranch', 'owner', owner)
      // verify required parameter 'repo' is not null or undefined
      assertParamExists('repoGetBranch', 'repo', repo)
      // verify required parameter 'branch' is not null or undefined
      assertParamExists('repoGetBranch', 'branch', branch)
      const localVarPath = `/repos/{owner}/{repo}/branches/{branch}`
        .replace(`{${'owner'}}`, encodeURIComponent(String(owner)))
        .replace(`{${'repo'}}`, encodeURIComponent(String(repo)))
        .replace(`{${'branch'}}`, encodeURIComponent(String(branch)))
      // use dummy base URL string because the URL constructor only accepts absolute URLs.
      const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL)
      let baseOptions
      if (configuration) {
        baseOptions = configuration.baseOptions
      }

      const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options }
      const localVarHeaderParameter = {} as any
      const localVarQueryParameter = {} as any

      // authentication TOTPHeader required
      await setApiKeyToObject(localVarHeaderParameter, 'X-GITEA-OTP', configuration)

      // authentication AuthorizationHeaderToken required
      await setApiKeyToObject(localVarHeaderParameter, 'Authorization', configuration)

      // authentication SudoHeader required
      await setApiKeyToObject(localVarHeaderParameter, 'Sudo', configuration)

      // authentication BasicAuth required
      // http basic authentication required
      setBasicAuthToObject(localVarRequestOptions, configuration)

      // authentication AccessToken required
      await setApiKeyToObject(localVarQueryParameter, 'access_token', configuration)

      // authentication SudoParam required
      await setApiKeyToObject(localVarQueryParameter, 'sudo', configuration)

      // authentication Token required
      await setApiKeyToObject(localVarQueryParameter, 'token', configuration)


      setSearchParams(localVarUrlObj, localVarQueryParameter)
      let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {}
      localVarRequestOptions.headers = { ...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers }

      return {
        url: toPathString(localVarUrlObj),
        options: localVarRequestOptions
      }
    },

    repoGetCombinedStatusByRef: async (owner: string, repo: string, ref: string, page?: number, limit?: number, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
      // verify required parameter 'owner' is not null or undefined
      assertParamExists('repoGetCombinedStatusByRef', 'owner', owner)
      // verify required parameter 'repo' is not null or undefined
      assertParamExists('repoGetCombinedStatusByRef', 'repo', repo)
      // verify required parameter 'ref' is not null or undefined
      assertParamExists('repoGetCombinedStatusByRef', 'ref', ref)
      const localVarPath = `/repos/{owner}/{repo}/commits/{ref}/status`
        .replace(`{${'owner'}}`, encodeURIComponent(String(owner)))
        .replace(`{${'repo'}}`, encodeURIComponent(String(repo)))
        .replace(`{${'ref'}}`, encodeURIComponent(String(ref)))
      // use dummy base URL string because the URL constructor only accepts absolute URLs.
      const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL)
      let baseOptions
      if (configuration) {
        baseOptions = configuration.baseOptions
      }

      const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options }
      const localVarHeaderParameter = {} as any
      const localVarQueryParameter = {} as any

      // authentication TOTPHeader required
      await setApiKeyToObject(localVarHeaderParameter, 'X-GITEA-OTP', configuration)

      // authentication AuthorizationHeaderToken required
      await setApiKeyToObject(localVarHeaderParameter, 'Authorization', configuration)

      // authentication SudoHeader required
      await setApiKeyToObject(localVarHeaderParameter, 'Sudo', configuration)

      // authentication BasicAuth required
      // http basic authentication required
      setBasicAuthToObject(localVarRequestOptions, configuration)

      // authentication AccessToken required
      await setApiKeyToObject(localVarQueryParameter, 'access_token', configuration)

      // authentication SudoParam required
      await setApiKeyToObject(localVarQueryParameter, 'sudo', configuration)

      // authentication Token required
      await setApiKeyToObject(localVarQueryParameter, 'token', configuration)

      if (page !== undefined) {
        localVarQueryParameter['page'] = page
      }

      if (limit !== undefined) {
        localVarQueryParameter['limit'] = limit
      }


      setSearchParams(localVarUrlObj, localVarQueryParameter)
      let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {}
      localVarRequestOptions.headers = { ...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers }

      return {
        url: toPathString(localVarUrlObj),
        options: localVarRequestOptions
      }
    },

    repoGetContents: async (owner: string, repo: string, filepath: string, ref?: string, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
      // verify required parameter 'owner' is not null or undefined
      assertParamExists('repoGetContents', 'owner', owner)
      // verify required parameter 'repo' is not null or undefined
      assertParamExists('repoGetContents', 'repo', repo)
      // verify required parameter 'filepath' is not null or undefined
      assertParamExists('repoGetContents', 'filepath', filepath)
      const localVarPath = `/repos/{owner}/{repo}/contents/{filepath}`
        .replace(`{${'owner'}}`, encodeURIComponent(String(owner)))
        .replace(`{${'repo'}}`, encodeURIComponent(String(repo)))
        .replace(`{${'filepath'}}`, encodeURIComponent(String(filepath)))
      // use dummy base URL string because the URL constructor only accepts absolute URLs.
      const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL)
      let baseOptions
      if (configuration) {
        baseOptions = configuration.baseOptions
      }

      const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options }
      const localVarHeaderParameter = {} as any
      const localVarQueryParameter = {} as any

      // authentication TOTPHeader required
      await setApiKeyToObject(localVarHeaderParameter, 'X-GITEA-OTP', configuration)

      // authentication AuthorizationHeaderToken required
      await setApiKeyToObject(localVarHeaderParameter, 'Authorization', configuration)

      // authentication SudoHeader required
      await setApiKeyToObject(localVarHeaderParameter, 'Sudo', configuration)

      // authentication BasicAuth required
      // http basic authentication required
      setBasicAuthToObject(localVarRequestOptions, configuration)

      // authentication AccessToken required
      await setApiKeyToObject(localVarQueryParameter, 'access_token', configuration)

      // authentication SudoParam required
      await setApiKeyToObject(localVarQueryParameter, 'sudo', configuration)

      // authentication Token required
      await setApiKeyToObject(localVarQueryParameter, 'token', configuration)

      if (ref !== undefined) {
        localVarQueryParameter['ref'] = ref
      }


      setSearchParams(localVarUrlObj, localVarQueryParameter)
      let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {}
      localVarRequestOptions.headers = { ...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers }

      return {
        url: toPathString(localVarUrlObj),
        options: localVarRequestOptions
      }
    },

    repoGetContentsList: async (owner: string, repo: string, ref?: string, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
      // verify required parameter 'owner' is not null or undefined
      assertParamExists('repoGetContentsList', 'owner', owner)
      // verify required parameter 'repo' is not null or undefined
      assertParamExists('repoGetContentsList', 'repo', repo)
      const localVarPath = `/repos/{owner}/{repo}/contents`
        .replace(`{${'owner'}}`, encodeURIComponent(String(owner)))
        .replace(`{${'repo'}}`, encodeURIComponent(String(repo)))
      // use dummy base URL string because the URL constructor only accepts absolute URLs.
      const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL)
      let baseOptions
      if (configuration) {
        baseOptions = configuration.baseOptions
      }

      const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options }
      const localVarHeaderParameter = {} as any
      const localVarQueryParameter = {} as any

      // authentication TOTPHeader required
      await setApiKeyToObject(localVarHeaderParameter, 'X-GITEA-OTP', configuration)

      // authentication AuthorizationHeaderToken required
      await setApiKeyToObject(localVarHeaderParameter, 'Authorization', configuration)

      // authentication SudoHeader required
      await setApiKeyToObject(localVarHeaderParameter, 'Sudo', configuration)

      // authentication BasicAuth required
      // http basic authentication required
      setBasicAuthToObject(localVarRequestOptions, configuration)

      // authentication AccessToken required
      await setApiKeyToObject(localVarQueryParameter, 'access_token', configuration)

      // authentication SudoParam required
      await setApiKeyToObject(localVarQueryParameter, 'sudo', configuration)

      // authentication Token required
      await setApiKeyToObject(localVarQueryParameter, 'token', configuration)

      if (ref !== undefined) {
        localVarQueryParameter['ref'] = ref
      }


      setSearchParams(localVarUrlObj, localVarQueryParameter)
      let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {}
      localVarRequestOptions.headers = { ...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers }

      return {
        url: toPathString(localVarUrlObj),
        options: localVarRequestOptions
      }
    },

    repoListBranches: async (owner: string, repo: string, page?: number, limit?: number, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
      // verify required parameter 'owner' is not null or undefined
      assertParamExists('repoListBranches', 'owner', owner)
      // verify required parameter 'repo' is not null or undefined
      assertParamExists('repoListBranches', 'repo', repo)
      const localVarPath = `/repos/{owner}/{repo}/branches`
        .replace(`{${'owner'}}`, encodeURIComponent(String(owner)))
        .replace(`{${'repo'}}`, encodeURIComponent(String(repo)))
      // use dummy base URL string because the URL constructor only accepts absolute URLs.
      const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL)
      let baseOptions
      if (configuration) {
        baseOptions = configuration.baseOptions
      }

      const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options }
      const localVarHeaderParameter = {} as any
      const localVarQueryParameter = {} as any

      // authentication TOTPHeader required
      await setApiKeyToObject(localVarHeaderParameter, 'X-GITEA-OTP', configuration)

      // authentication AuthorizationHeaderToken required
      await setApiKeyToObject(localVarHeaderParameter, 'Authorization', configuration)

      // authentication SudoHeader required
      await setApiKeyToObject(localVarHeaderParameter, 'Sudo', configuration)

      // authentication BasicAuth required
      // http basic authentication required
      setBasicAuthToObject(localVarRequestOptions, configuration)

      // authentication AccessToken required
      await setApiKeyToObject(localVarQueryParameter, 'access_token', configuration)

      // authentication SudoParam required
      await setApiKeyToObject(localVarQueryParameter, 'sudo', configuration)

      // authentication Token required
      await setApiKeyToObject(localVarQueryParameter, 'token', configuration)

      if (page !== undefined) {
        localVarQueryParameter['page'] = page
      }

      if (limit !== undefined) {
        localVarQueryParameter['limit'] = limit
      }


      setSearchParams(localVarUrlObj, localVarQueryParameter)
      let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {}
      localVarRequestOptions.headers = { ...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers }

      return {
        url: toPathString(localVarUrlObj),
        options: localVarRequestOptions
      }
    },

    repoListStatusesByRef: async (owner: string, repo: string, ref: string, sort?: RepoListStatusesByRefSortEnum, state?: RepoListStatusesByRefStateEnum, page?: number, limit?: number, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
      // verify required parameter 'owner' is not null or undefined
      assertParamExists('repoListStatusesByRef', 'owner', owner)
      // verify required parameter 'repo' is not null or undefined
      assertParamExists('repoListStatusesByRef', 'repo', repo)
      // verify required parameter 'ref' is not null or undefined
      assertParamExists('repoListStatusesByRef', 'ref', ref)
      const localVarPath = `/repos/{owner}/{repo}/commits/{ref}/statuses`
        .replace(`{${'owner'}}`, encodeURIComponent(String(owner)))
        .replace(`{${'repo'}}`, encodeURIComponent(String(repo)))
        .replace(`{${'ref'}}`, encodeURIComponent(String(ref)))
      // use dummy base URL string because the URL constructor only accepts absolute URLs.
      const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL)
      let baseOptions
      if (configuration) {
        baseOptions = configuration.baseOptions
      }

      const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options }
      const localVarHeaderParameter = {} as any
      const localVarQueryParameter = {} as any

      // authentication TOTPHeader required
      await setApiKeyToObject(localVarHeaderParameter, 'X-GITEA-OTP', configuration)

      // authentication AuthorizationHeaderToken required
      await setApiKeyToObject(localVarHeaderParameter, 'Authorization', configuration)

      // authentication SudoHeader required
      await setApiKeyToObject(localVarHeaderParameter, 'Sudo', configuration)

      // authentication BasicAuth required
      // http basic authentication required
      setBasicAuthToObject(localVarRequestOptions, configuration)

      // authentication AccessToken required
      await setApiKeyToObject(localVarQueryParameter, 'access_token', configuration)

      // authentication SudoParam required
      await setApiKeyToObject(localVarQueryParameter, 'sudo', configuration)

      // authentication Token required
      await setApiKeyToObject(localVarQueryParameter, 'token', configuration)

      if (sort !== undefined) {
        localVarQueryParameter['sort'] = sort
      }

      if (state !== undefined) {
        localVarQueryParameter['state'] = state
      }

      if (page !== undefined) {
        localVarQueryParameter['page'] = page
      }

      if (limit !== undefined) {
        localVarQueryParameter['limit'] = limit
      }


      setSearchParams(localVarUrlObj, localVarQueryParameter)
      let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {}
      localVarRequestOptions.headers = { ...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers }

      return {
        url: toPathString(localVarUrlObj),
        options: localVarRequestOptions
      }
    },

    repoSearch: async (q?: string, topic?: boolean, includeDesc?: boolean, uid?: number, priorityOwnerId?: number, teamId?: number, starredBy?: number, _private?: boolean, isPrivate?: boolean, template?: boolean, archived?: boolean, mode?: string, exclusive?: boolean, sort?: string, order?: string, page?: number, limit?: number, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
      const localVarPath = `/repos/search`
      // use dummy base URL string because the URL constructor only accepts absolute URLs.
      const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL)
      let baseOptions
      if (configuration) {
        baseOptions = configuration.baseOptions
      }

      const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options }
      const localVarHeaderParameter = {} as any
      const localVarQueryParameter = {} as any

      // authentication TOTPHeader required
      await setApiKeyToObject(localVarHeaderParameter, 'X-GITEA-OTP', configuration)

      // authentication AuthorizationHeaderToken required
      await setApiKeyToObject(localVarHeaderParameter, 'Authorization', configuration)

      // authentication SudoHeader required
      await setApiKeyToObject(localVarHeaderParameter, 'Sudo', configuration)

      // authentication BasicAuth required
      // http basic authentication required
      setBasicAuthToObject(localVarRequestOptions, configuration)

      // authentication AccessToken required
      await setApiKeyToObject(localVarQueryParameter, 'access_token', configuration)

      // authentication SudoParam required
      await setApiKeyToObject(localVarQueryParameter, 'sudo', configuration)

      // authentication Token required
      await setApiKeyToObject(localVarQueryParameter, 'token', configuration)

      if (q !== undefined) {
        localVarQueryParameter['q'] = q
      }

      if (topic !== undefined) {
        localVarQueryParameter['topic'] = topic
      }

      if (includeDesc !== undefined) {
        localVarQueryParameter['includeDesc'] = includeDesc
      }

      if (uid !== undefined) {
        localVarQueryParameter['uid'] = uid
      }

      if (priorityOwnerId !== undefined) {
        localVarQueryParameter['priority_owner_id'] = priorityOwnerId
      }

      if (teamId !== undefined) {
        localVarQueryParameter['team_id'] = teamId
      }

      if (starredBy !== undefined) {
        localVarQueryParameter['starredBy'] = starredBy
      }

      if (_private !== undefined) {
        localVarQueryParameter['private'] = _private
      }

      if (isPrivate !== undefined) {
        localVarQueryParameter['is_private'] = isPrivate
      }

      if (template !== undefined) {
        localVarQueryParameter['template'] = template
      }

      if (archived !== undefined) {
        localVarQueryParameter['archived'] = archived
      }

      if (mode !== undefined) {
        localVarQueryParameter['mode'] = mode
      }

      if (exclusive !== undefined) {
        localVarQueryParameter['exclusive'] = exclusive
      }

      if (sort !== undefined) {
        localVarQueryParameter['sort'] = sort
      }

      if (order !== undefined) {
        localVarQueryParameter['order'] = order
      }

      if (page !== undefined) {
        localVarQueryParameter['page'] = page
      }

      if (limit !== undefined) {
        localVarQueryParameter['limit'] = limit
      }


      setSearchParams(localVarUrlObj, localVarQueryParameter)
      let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {}
      localVarRequestOptions.headers = { ...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers }

      return {
        url: toPathString(localVarUrlObj),
        options: localVarRequestOptions
      }
    },

    repoUpdateFile: async (owner: string, repo: string, filepath: string, body: UpdateFileOptions, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
      // verify required parameter 'owner' is not null or undefined
      assertParamExists('repoUpdateFile', 'owner', owner)
      // verify required parameter 'repo' is not null or undefined
      assertParamExists('repoUpdateFile', 'repo', repo)
      // verify required parameter 'filepath' is not null or undefined
      assertParamExists('repoUpdateFile', 'filepath', filepath)
      // verify required parameter 'body' is not null or undefined
      assertParamExists('repoUpdateFile', 'body', body)
      const localVarPath = `/repos/{owner}/{repo}/contents/{filepath}`
        .replace(`{${'owner'}}`, encodeURIComponent(String(owner)))
        .replace(`{${'repo'}}`, encodeURIComponent(String(repo)))
        .replace(`{${'filepath'}}`, encodeURIComponent(String(filepath)))
      // use dummy base URL string because the URL constructor only accepts absolute URLs.
      const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL)
      let baseOptions
      if (configuration) {
        baseOptions = configuration.baseOptions
      }

      const localVarRequestOptions = { method: 'PUT', ...baseOptions, ...options }
      const localVarHeaderParameter = {} as any
      const localVarQueryParameter = {} as any

      // authentication TOTPHeader required
      await setApiKeyToObject(localVarHeaderParameter, 'X-GITEA-OTP', configuration)

      // authentication AuthorizationHeaderToken required
      await setApiKeyToObject(localVarHeaderParameter, 'Authorization', configuration)

      // authentication SudoHeader required
      await setApiKeyToObject(localVarHeaderParameter, 'Sudo', configuration)

      // authentication BasicAuth required
      // http basic authentication required
      setBasicAuthToObject(localVarRequestOptions, configuration)

      // authentication AccessToken required
      await setApiKeyToObject(localVarQueryParameter, 'access_token', configuration)

      // authentication SudoParam required
      await setApiKeyToObject(localVarQueryParameter, 'sudo', configuration)

      // authentication Token required
      await setApiKeyToObject(localVarQueryParameter, 'token', configuration)


      localVarHeaderParameter['Content-Type'] = 'application/json'

      setSearchParams(localVarUrlObj, localVarQueryParameter)
      let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {}
      localVarRequestOptions.headers = { ...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers }
      localVarRequestOptions.data = serializeDataIfNeeded(body, localVarRequestOptions, configuration)

      return {
        url: toPathString(localVarUrlObj),
        options: localVarRequestOptions
      }
    }
  }
}


export const RepositoryApiFp = function(configuration?: Configuration) {
  const localVarAxiosParamCreator = RepositoryApiAxiosParamCreator(configuration)
  return {

    async repoChangeFiles(owner: string, repo: string, body: ChangeFilesOptions, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<FilesResponse>> {
      const localVarAxiosArgs = await localVarAxiosParamCreator.repoChangeFiles(owner, repo, body, options)
      const localVarOperationServerIndex = configuration?.serverIndex ?? 0
      const localVarOperationServerBasePath = operationServerMap['RepositoryApi.repoChangeFiles']?.[localVarOperationServerIndex]?.url
      return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath)
    },

    async repoCreateBranch(owner: string, repo: string, body?: CreateBranchRepoOption, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Branch>> {
      const localVarAxiosArgs = await localVarAxiosParamCreator.repoCreateBranch(owner, repo, body, options)
      const localVarOperationServerIndex = configuration?.serverIndex ?? 0
      const localVarOperationServerBasePath = operationServerMap['RepositoryApi.repoCreateBranch']?.[localVarOperationServerIndex]?.url
      return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath)
    },

    async repoCreateFile(owner: string, repo: string, filepath: string, body: CreateFileOptions, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<FileResponse>> {
      const localVarAxiosArgs = await localVarAxiosParamCreator.repoCreateFile(owner, repo, filepath, body, options)
      const localVarOperationServerIndex = configuration?.serverIndex ?? 0
      const localVarOperationServerBasePath = operationServerMap['RepositoryApi.repoCreateFile']?.[localVarOperationServerIndex]?.url
      return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath)
    },

    async repoDeleteBranch(owner: string, repo: string, branch: string, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
      const localVarAxiosArgs = await localVarAxiosParamCreator.repoDeleteBranch(owner, repo, branch, options)
      const localVarOperationServerIndex = configuration?.serverIndex ?? 0
      const localVarOperationServerBasePath = operationServerMap['RepositoryApi.repoDeleteBranch']?.[localVarOperationServerIndex]?.url
      return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath)
    },

    async repoDeleteFile(owner: string, repo: string, filepath: string, body: DeleteFileOptions, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<FileDeleteResponse>> {
      const localVarAxiosArgs = await localVarAxiosParamCreator.repoDeleteFile(owner, repo, filepath, body, options)
      const localVarOperationServerIndex = configuration?.serverIndex ?? 0
      const localVarOperationServerBasePath = operationServerMap['RepositoryApi.repoDeleteFile']?.[localVarOperationServerIndex]?.url
      return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath)
    },

    async repoGetAllCommits(owner: string, repo: string, sha?: string, path?: string, stat?: boolean, verification?: boolean, files?: boolean, page?: number, limit?: number, not?: string, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Array<Commit>>> {
      const localVarAxiosArgs = await localVarAxiosParamCreator.repoGetAllCommits(owner, repo, sha, path, stat, verification, files, page, limit, not, options)
      const localVarOperationServerIndex = configuration?.serverIndex ?? 0
      const localVarOperationServerBasePath = operationServerMap['RepositoryApi.repoGetAllCommits']?.[localVarOperationServerIndex]?.url
      return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath)
    },

    async repoGetBranch(owner: string, repo: string, branch: string, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Branch>> {
      const localVarAxiosArgs = await localVarAxiosParamCreator.repoGetBranch(owner, repo, branch, options)
      const localVarOperationServerIndex = configuration?.serverIndex ?? 0
      const localVarOperationServerBasePath = operationServerMap['RepositoryApi.repoGetBranch']?.[localVarOperationServerIndex]?.url
      return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath)
    },

    async repoGetCombinedStatusByRef(owner: string, repo: string, ref: string, page?: number, limit?: number, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<CombinedStatus>> {
      const localVarAxiosArgs = await localVarAxiosParamCreator.repoGetCombinedStatusByRef(owner, repo, ref, page, limit, options)
      const localVarOperationServerIndex = configuration?.serverIndex ?? 0
      const localVarOperationServerBasePath = operationServerMap['RepositoryApi.repoGetCombinedStatusByRef']?.[localVarOperationServerIndex]?.url
      return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath)
    },

    async repoGetContents(owner: string, repo: string, filepath: string, ref?: string, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<ContentsResponse>> {
      const localVarAxiosArgs = await localVarAxiosParamCreator.repoGetContents(owner, repo, filepath, ref, options)
      const localVarOperationServerIndex = configuration?.serverIndex ?? 0
      const localVarOperationServerBasePath = operationServerMap['RepositoryApi.repoGetContents']?.[localVarOperationServerIndex]?.url
      return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath)
    },

    async repoGetContentsList(owner: string, repo: string, ref?: string, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Array<ContentsResponse>>> {
      const localVarAxiosArgs = await localVarAxiosParamCreator.repoGetContentsList(owner, repo, ref, options)
      const localVarOperationServerIndex = configuration?.serverIndex ?? 0
      const localVarOperationServerBasePath = operationServerMap['RepositoryApi.repoGetContentsList']?.[localVarOperationServerIndex]?.url
      return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath)
    },

    async repoListBranches(owner: string, repo: string, page?: number, limit?: number, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Array<Branch>>> {
      const localVarAxiosArgs = await localVarAxiosParamCreator.repoListBranches(owner, repo, page, limit, options)
      const localVarOperationServerIndex = configuration?.serverIndex ?? 0
      const localVarOperationServerBasePath = operationServerMap['RepositoryApi.repoListBranches']?.[localVarOperationServerIndex]?.url
      return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath)
    },

    async repoListStatusesByRef(owner: string, repo: string, ref: string, sort?: RepoListStatusesByRefSortEnum, state?: RepoListStatusesByRefStateEnum, page?: number, limit?: number, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Array<CommitStatus>>> {
      const localVarAxiosArgs = await localVarAxiosParamCreator.repoListStatusesByRef(owner, repo, ref, sort, state, page, limit, options)
      const localVarOperationServerIndex = configuration?.serverIndex ?? 0
      const localVarOperationServerBasePath = operationServerMap['RepositoryApi.repoListStatusesByRef']?.[localVarOperationServerIndex]?.url
      return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath)
    },

    async repoSearch(q?: string, topic?: boolean, includeDesc?: boolean, uid?: number, priorityOwnerId?: number, teamId?: number, starredBy?: number, _private?: boolean, isPrivate?: boolean, template?: boolean, archived?: boolean, mode?: string, exclusive?: boolean, sort?: string, order?: string, page?: number, limit?: number, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<SearchResults>> {
      const localVarAxiosArgs = await localVarAxiosParamCreator.repoSearch(q, topic, includeDesc, uid, priorityOwnerId, teamId, starredBy, _private, isPrivate, template, archived, mode, exclusive, sort, order, page, limit, options)
      const localVarOperationServerIndex = configuration?.serverIndex ?? 0
      const localVarOperationServerBasePath = operationServerMap['RepositoryApi.repoSearch']?.[localVarOperationServerIndex]?.url
      return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath)
    },

    async repoUpdateFile(owner: string, repo: string, filepath: string, body: UpdateFileOptions, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<FileResponse>> {
      const localVarAxiosArgs = await localVarAxiosParamCreator.repoUpdateFile(owner, repo, filepath, body, options)
      const localVarOperationServerIndex = configuration?.serverIndex ?? 0
      const localVarOperationServerBasePath = operationServerMap['RepositoryApi.repoUpdateFile']?.[localVarOperationServerIndex]?.url
      return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath)
    }
  }
}


export const RepositoryApiFactory = function(configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
  const localVarFp = RepositoryApiFp(configuration)
  return {

    repoChangeFiles(owner: string, repo: string, body: ChangeFilesOptions, options?: RawAxiosRequestConfig): AxiosPromise<FilesResponse> {
      return localVarFp.repoChangeFiles(owner, repo, body, options).then((request) => request(axios, basePath))
    },

    repoCreateBranch(owner: string, repo: string, body?: CreateBranchRepoOption, options?: RawAxiosRequestConfig): AxiosPromise<Branch> {
      return localVarFp.repoCreateBranch(owner, repo, body, options).then((request) => request(axios, basePath))
    },

    repoCreateFile(owner: string, repo: string, filepath: string, body: CreateFileOptions, options?: RawAxiosRequestConfig): AxiosPromise<FileResponse> {
      return localVarFp.repoCreateFile(owner, repo, filepath, body, options).then((request) => request(axios, basePath))
    },

    repoDeleteBranch(owner: string, repo: string, branch: string, options?: RawAxiosRequestConfig): AxiosPromise<void> {
      return localVarFp.repoDeleteBranch(owner, repo, branch, options).then((request) => request(axios, basePath))
    },

    repoDeleteFile(owner: string, repo: string, filepath: string, body: DeleteFileOptions, options?: RawAxiosRequestConfig): AxiosPromise<FileDeleteResponse> {
      return localVarFp.repoDeleteFile(owner, repo, filepath, body, options).then((request) => request(axios, basePath))
    },

    repoGetAllCommits(owner: string, repo: string, sha?: string, path?: string, stat?: boolean, verification?: boolean, files?: boolean, page?: number, limit?: number, not?: string, options?: RawAxiosRequestConfig): AxiosPromise<Array<Commit>> {
      return localVarFp.repoGetAllCommits(owner, repo, sha, path, stat, verification, files, page, limit, not, options).then((request) => request(axios, basePath))
    },

    repoGetBranch(owner: string, repo: string, branch: string, options?: RawAxiosRequestConfig): AxiosPromise<Branch> {
      return localVarFp.repoGetBranch(owner, repo, branch, options).then((request) => request(axios, basePath))
    },

    repoGetCombinedStatusByRef(owner: string, repo: string, ref: string, page?: number, limit?: number, options?: RawAxiosRequestConfig): AxiosPromise<CombinedStatus> {
      return localVarFp.repoGetCombinedStatusByRef(owner, repo, ref, page, limit, options).then((request) => request(axios, basePath))
    },

    repoGetContents(owner: string, repo: string, filepath: string, ref?: string, options?: RawAxiosRequestConfig): AxiosPromise<ContentsResponse> {
      return localVarFp.repoGetContents(owner, repo, filepath, ref, options).then((request) => request(axios, basePath))
    },

    repoGetContentsList(owner: string, repo: string, ref?: string, options?: RawAxiosRequestConfig): AxiosPromise<Array<ContentsResponse>> {
      return localVarFp.repoGetContentsList(owner, repo, ref, options).then((request) => request(axios, basePath))
    },

    repoListBranches(owner: string, repo: string, page?: number, limit?: number, options?: RawAxiosRequestConfig): AxiosPromise<Array<Branch>> {
      return localVarFp.repoListBranches(owner, repo, page, limit, options).then((request) => request(axios, basePath))
    },

    repoListStatusesByRef(owner: string, repo: string, ref: string, sort?: RepoListStatusesByRefSortEnum, state?: RepoListStatusesByRefStateEnum, page?: number, limit?: number, options?: RawAxiosRequestConfig): AxiosPromise<Array<CommitStatus>> {
      return localVarFp.repoListStatusesByRef(owner, repo, ref, sort, state, page, limit, options).then((request) => request(axios, basePath))
    },

    repoSearch(q?: string, topic?: boolean, includeDesc?: boolean, uid?: number, priorityOwnerId?: number, teamId?: number, starredBy?: number, _private?: boolean, isPrivate?: boolean, template?: boolean, archived?: boolean, mode?: string, exclusive?: boolean, sort?: string, order?: string, page?: number, limit?: number, options?: RawAxiosRequestConfig): AxiosPromise<SearchResults> {
      return localVarFp.repoSearch(q, topic, includeDesc, uid, priorityOwnerId, teamId, starredBy, _private, isPrivate, template, archived, mode, exclusive, sort, order, page, limit, options).then((request) => request(axios, basePath))
    },

    repoUpdateFile(owner: string, repo: string, filepath: string, body: UpdateFileOptions, options?: RawAxiosRequestConfig): AxiosPromise<FileResponse> {
      return localVarFp.repoUpdateFile(owner, repo, filepath, body, options).then((request) => request(axios, basePath))
    }
  }
}


export interface RepositoryApiInterface {

  repoChangeFiles(owner: string, repo: string, body: ChangeFilesOptions, options?: RawAxiosRequestConfig): AxiosPromise<FilesResponse>;


  repoCreateBranch(owner: string, repo: string, body?: CreateBranchRepoOption, options?: RawAxiosRequestConfig): AxiosPromise<Branch>;


  repoCreateFile(owner: string, repo: string, filepath: string, body: CreateFileOptions, options?: RawAxiosRequestConfig): AxiosPromise<FileResponse>;


  repoDeleteBranch(owner: string, repo: string, branch: string, options?: RawAxiosRequestConfig): AxiosPromise<void>;


  repoDeleteFile(owner: string, repo: string, filepath: string, body: DeleteFileOptions, options?: RawAxiosRequestConfig): AxiosPromise<FileDeleteResponse>;


  repoGetAllCommits(owner: string, repo: string, sha?: string, path?: string, stat?: boolean, verification?: boolean, files?: boolean, page?: number, limit?: number, not?: string, options?: RawAxiosRequestConfig): AxiosPromise<Array<Commit>>;


  repoGetBranch(owner: string, repo: string, branch: string, options?: RawAxiosRequestConfig): AxiosPromise<Branch>;


  repoGetCombinedStatusByRef(owner: string, repo: string, ref: string, page?: number, limit?: number, options?: RawAxiosRequestConfig): AxiosPromise<CombinedStatus>;


  repoGetContents(owner: string, repo: string, filepath: string, ref?: string, options?: RawAxiosRequestConfig): AxiosPromise<ContentsResponse>;


  repoGetContentsList(owner: string, repo: string, ref?: string, options?: RawAxiosRequestConfig): AxiosPromise<Array<ContentsResponse>>;


  repoListBranches(owner: string, repo: string, page?: number, limit?: number, options?: RawAxiosRequestConfig): AxiosPromise<Array<Branch>>;


  repoListStatusesByRef(owner: string, repo: string, ref: string, sort?: RepoListStatusesByRefSortEnum, state?: RepoListStatusesByRefStateEnum, page?: number, limit?: number, options?: RawAxiosRequestConfig): AxiosPromise<Array<CommitStatus>>;


  repoSearch(q?: string, topic?: boolean, includeDesc?: boolean, uid?: number, priorityOwnerId?: number, teamId?: number, starredBy?: number, _private?: boolean, isPrivate?: boolean, template?: boolean, archived?: boolean, mode?: string, exclusive?: boolean, sort?: string, order?: string, page?: number, limit?: number, options?: RawAxiosRequestConfig): AxiosPromise<SearchResults>;


  repoUpdateFile(owner: string, repo: string, filepath: string, body: UpdateFileOptions, options?: RawAxiosRequestConfig): AxiosPromise<FileResponse>;

}


export class RepositoryApi extends BaseAPI implements RepositoryApiInterface {

  public repoChangeFiles(owner: string, repo: string, body: ChangeFilesOptions, options?: RawAxiosRequestConfig) {
    return RepositoryApiFp(this.configuration).repoChangeFiles(owner, repo, body, options).then((request) => request(this.axios, this.basePath))
  }


  public repoCreateBranch(owner: string, repo: string, body?: CreateBranchRepoOption, options?: RawAxiosRequestConfig) {
    return RepositoryApiFp(this.configuration).repoCreateBranch(owner, repo, body, options).then((request) => request(this.axios, this.basePath))
  }


  public repoCreateFile(owner: string, repo: string, filepath: string, body: CreateFileOptions, options?: RawAxiosRequestConfig) {
    return RepositoryApiFp(this.configuration).repoCreateFile(owner, repo, filepath, body, options).then((request) => request(this.axios, this.basePath))
  }


  public repoDeleteBranch(owner: string, repo: string, branch: string, options?: RawAxiosRequestConfig) {
    return RepositoryApiFp(this.configuration).repoDeleteBranch(owner, repo, branch, options).then((request) => request(this.axios, this.basePath))
  }


  public repoDeleteFile(owner: string, repo: string, filepath: string, body: DeleteFileOptions, options?: RawAxiosRequestConfig) {
    return RepositoryApiFp(this.configuration).repoDeleteFile(owner, repo, filepath, body, options).then((request) => request(this.axios, this.basePath))
  }


  public repoGetAllCommits(owner: string, repo: string, sha?: string, path?: string, stat?: boolean, verification?: boolean, files?: boolean, page?: number, limit?: number, not?: string, options?: RawAxiosRequestConfig) {
    return RepositoryApiFp(this.configuration).repoGetAllCommits(owner, repo, sha, path, stat, verification, files, page, limit, not, options).then((request) => request(this.axios, this.basePath))
  }


  public repoGetBranch(owner: string, repo: string, branch: string, options?: RawAxiosRequestConfig) {
    return RepositoryApiFp(this.configuration).repoGetBranch(owner, repo, branch, options).then((request) => request(this.axios, this.basePath))
  }


  public repoGetCombinedStatusByRef(owner: string, repo: string, ref: string, page?: number, limit?: number, options?: RawAxiosRequestConfig) {
    return RepositoryApiFp(this.configuration).repoGetCombinedStatusByRef(owner, repo, ref, page, limit, options).then((request) => request(this.axios, this.basePath))
  }


  public repoGetContents(owner: string, repo: string, filepath: string, ref?: string, options?: RawAxiosRequestConfig) {
    return RepositoryApiFp(this.configuration).repoGetContents(owner, repo, filepath, ref, options).then((request) => request(this.axios, this.basePath))
  }


  public repoGetContentsList(owner: string, repo: string, ref?: string, options?: RawAxiosRequestConfig) {
    return RepositoryApiFp(this.configuration).repoGetContentsList(owner, repo, ref, options).then((request) => request(this.axios, this.basePath))
  }


  public repoListBranches(owner: string, repo: string, page?: number, limit?: number, options?: RawAxiosRequestConfig) {
    return RepositoryApiFp(this.configuration).repoListBranches(owner, repo, page, limit, options).then((request) => request(this.axios, this.basePath))
  }


  public repoListStatusesByRef(owner: string, repo: string, ref: string, sort?: RepoListStatusesByRefSortEnum, state?: RepoListStatusesByRefStateEnum, page?: number, limit?: number, options?: RawAxiosRequestConfig) {
    return RepositoryApiFp(this.configuration).repoListStatusesByRef(owner, repo, ref, sort, state, page, limit, options).then((request) => request(this.axios, this.basePath))
  }


  public repoSearch(q?: string, topic?: boolean, includeDesc?: boolean, uid?: number, priorityOwnerId?: number, teamId?: number, starredBy?: number, _private?: boolean, isPrivate?: boolean, template?: boolean, archived?: boolean, mode?: string, exclusive?: boolean, sort?: string, order?: string, page?: number, limit?: number, options?: RawAxiosRequestConfig) {
    return RepositoryApiFp(this.configuration).repoSearch(q, topic, includeDesc, uid, priorityOwnerId, teamId, starredBy, _private, isPrivate, template, archived, mode, exclusive, sort, order, page, limit, options).then((request) => request(this.axios, this.basePath))
  }


  public repoUpdateFile(owner: string, repo: string, filepath: string, body: UpdateFileOptions, options?: RawAxiosRequestConfig) {
    return RepositoryApiFp(this.configuration).repoUpdateFile(owner, repo, filepath, body, options).then((request) => request(this.axios, this.basePath))
  }
}


export const RepoListStatusesByRefSortEnum = {
  oldest: 'oldest',
  recentupdate: 'recentupdate',
  leastupdate: 'leastupdate',
  leastindex: 'leastindex',
  highestindex: 'highestindex'
} as const
export type RepoListStatusesByRefSortEnum = typeof RepoListStatusesByRefSortEnum[keyof typeof RepoListStatusesByRefSortEnum];

export const RepoListStatusesByRefStateEnum = {
  pending: 'pending',
  success: 'success',
  error: 'error',
  failure: 'failure',
  warning: 'warning'
} as const
export type RepoListStatusesByRefStateEnum = typeof RepoListStatusesByRefStateEnum[keyof typeof RepoListStatusesByRefStateEnum];


