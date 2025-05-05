/*********************************************************************
 * Copyright (c) 2025 Contributors to the Eclipse Foundation.
 *
 * This program and the accompanying materials are made
 * available under the terms of the Eclipse Public License 2.0
 * which is available at https://www.eclipse.org/legal/epl-2.0/
 *
 * SPDX-License-Identifier: EPL-2.0
 *
 * Contributors:
 *   Smart City Jena
 **********************************************************************/
import type { Parallel } from "./Parallel";
import type { Binding } from "./Binding";
import type { DataSource } from "./DataSource";
import type { DataSourceView } from "./DataSourceView";
import type { ErrorConfiguration } from "./ErrorConfiguration";
import type { Create } from "./Create";
import type { Alter } from "./Alter";
import type { Delete } from "./Delete";
import type { Process } from "./Process";
import type { MergePartitions } from "./MergePartitions";
import type { DesignAggregations } from "./DesignAggregations";
import type { NotifyTableChange } from "./NotifyTableChange";
import type { Insert } from "./Insert";
import type { Update } from "./Update";
import type { Drop } from "./Drop";
import type { UpdateCells } from "./UpdateCells";
import type { Backup } from "./Backup";
import type { Restore } from "./Restore";
import type { Synchronize } from "./Synchronize";
import type { Cancel } from "./Cancel";
import type { BeginTransaction } from "./BeginTransaction";
import type { CommitTransaction } from "./CommitTransaction";
import type { RollbackTransaction } from "./RollbackTransaction";
import type { ClearCache } from "./ClearCache";
import type { Subscribe } from "./Subscribe";
import type { Unsubscribe } from "./Unsubscribe";
import type { Detach } from "./Detach";
import type { Attach } from "./Attach";
import type { Lock } from "./Lock";
import type { Unlock } from "./Unlock";
import type { ImageLoad } from "./ImageLoad";
import type { ImageSave } from "./ImageSave";
import type { CloneDatabase } from "./CloneDatabase";
import type { SetAuthContext } from "./SetAuthContext";
import type { Dbcc } from "./Dbcc";
import type { Discover1 } from "./Discover1";

/**
 * Batch
 * @targetNSAlias `__tns__`
 * @targetNamespace `urn:schemas-microsoft-com:xml-analysis`
 */
export interface Batch {
  /** Parallel[] */
  Parallel?: Array<Parallel>;
  /** Bindings */
  Bindings?: Binding;
  /** DataSource */
  DataSource?: DataSource;
  /** DataSourceView */
  DataSourceView?: DataSourceView;
  /** ErrorConfiguration */
  ErrorConfiguration?: ErrorConfiguration;
  /** Create[] */
  Create?: Array<Create>;
  /** Alter[] */
  Alter?: Array<Alter>;
  /** Delete[] */
  Delete?: Array<Delete>;
  /** Process[] */
  Process?: Array<Process>;
  /** MergePartitions[] */
  MergePartitions?: Array<MergePartitions>;
  /** DesignAggregations[] */
  DesignAggregations?: Array<DesignAggregations>;
  /** NotifyTableChange[] */
  NotifyTableChange?: Array<NotifyTableChange>;
  /** Insert[] */
  Insert?: Array<Insert>;
  /** Update[] */
  Update?: Array<Update>;
  /** Drop[] */
  Drop?: Array<Drop>;
  /** UpdateCells[] */
  UpdateCells?: Array<UpdateCells>;
  /** Backup[] */
  Backup?: Array<Backup>;
  /** Restore[] */
  Restore?: Array<Restore>;
  /** Synchronize[] */
  Synchronize?: Array<Synchronize>;
  /** Cancel[] */
  Cancel?: Array<Cancel>;
  /** BeginTransaction[] */
  BeginTransaction?: Array<BeginTransaction>;
  /** CommitTransaction[] */
  CommitTransaction?: Array<CommitTransaction>;
  /** RollbackTransaction[] */
  RollbackTransaction?: Array<RollbackTransaction>;
  /** ClearCache[] */
  ClearCache?: Array<ClearCache>;
  /** Subscribe[] */
  Subscribe?: Array<Subscribe>;
  /** Unsubscribe[] */
  Unsubscribe?: Array<Unsubscribe>;
  /** Detach[] */
  Detach?: Array<Detach>;
  /** Attach[] */
  Attach?: Array<Attach>;
  /** Lock[] */
  Lock?: Array<Lock>;
  /** Unlock[] */
  Unlock?: Array<Unlock>;
  /** ImageLoad[] */
  ImageLoad?: Array<ImageLoad>;
  /** ImageSave[] */
  ImageSave?: Array<ImageSave>;
  /** CloneDatabase[] */
  CloneDatabase?: Array<CloneDatabase>;
  /** SetAuthContext[] */
  SetAuthContext?: Array<SetAuthContext>;
  /** DBCC */
  DBCC?: Dbcc;
  /** Discover */
  Discover?: Discover1;
}
