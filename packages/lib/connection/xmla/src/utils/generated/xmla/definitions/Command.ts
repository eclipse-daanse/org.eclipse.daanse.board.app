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
import type { Create } from "./Create";
import type { Alter } from "./Alter";
import type { Delete } from "./Delete";
import type { Process } from "./Process";
import type { MergePartitions } from "./MergePartitions";
import type { DesignAggregations } from "./DesignAggregations";
import type { ClearCache } from "./ClearCache";
import type { Subscribe } from "./Subscribe";
import type { Unsubscribe } from "./Unsubscribe";
import type { Cancel } from "./Cancel";
import type { BeginTransaction } from "./BeginTransaction";
import type { CommitTransaction } from "./CommitTransaction";
import type { RollbackTransaction } from "./RollbackTransaction";
import type { Lock } from "./Lock";
import type { Unlock } from "./Unlock";
import type { Backup } from "./Backup";
import type { Restore } from "./Restore";
import type { Synchronize } from "./Synchronize";
import type { Attach } from "./Attach";
import type { Detach } from "./Detach";
import type { Insert } from "./Insert";
import type { Update } from "./Update";
import type { Drop } from "./Drop";
import type { UpdateCells } from "./UpdateCells";
import type { NotifyTableChange } from "./NotifyTableChange";
import type { Batch } from "./Batch";
import type { ImageLoad } from "./ImageLoad";
import type { ImageSave } from "./ImageSave";
import type { CloneDatabase } from "./CloneDatabase";
import type { SetAuthContext } from "./SetAuthContext";
import type { Dbcc } from "./Dbcc";

/**
 * Command
 * @targetNSAlias `__tns__`
 * @targetNamespace `urn:schemas-microsoft-com:xml-analysis`
 */
export interface Command {
  /** xsd:string */
  Statement?: string;
  /** Create */
  Create?: Create;
  /** Alter */
  Alter?: Alter;
  /** Delete */
  Delete?: Delete;
  /** Process */
  Process?: Process;
  /** MergePartitions */
  MergePartitions?: MergePartitions;
  /** DesignAggregations */
  DesignAggregations?: DesignAggregations;
  /** ClearCache */
  ClearCache?: ClearCache;
  /** Subscribe */
  Subscribe?: Subscribe;
  /** Unsubscribe */
  Unsubscribe?: Unsubscribe;
  /** Cancel */
  Cancel?: Cancel;
  /** BeginTransaction */
  BeginTransaction?: BeginTransaction;
  /** CommitTransaction */
  CommitTransaction?: CommitTransaction;
  /** RollbackTransaction */
  RollbackTransaction?: RollbackTransaction;
  /** Lock */
  Lock?: Lock;
  /** Unlock */
  Unlock?: Unlock;
  /** Backup */
  Backup?: Backup;
  /** Restore */
  Restore?: Restore;
  /** Synchronize */
  Synchronize?: Synchronize;
  /** Attach */
  Attach?: Attach;
  /** Detach */
  Detach?: Detach;
  /** Insert */
  Insert?: Insert;
  /** Update */
  Update?: Update;
  /** Drop */
  Drop?: Drop;
  /** UpdateCells */
  UpdateCells?: UpdateCells;
  /** NotifyTableChange */
  NotifyTableChange?: NotifyTableChange;
  /** Batch */
  Batch?: Batch;
  /** ImageLoad */
  ImageLoad?: ImageLoad;
  /** ImageSave */
  ImageSave?: ImageSave;
  /** CloneDatabase */
  CloneDatabase?: CloneDatabase;
  /** SetAuthContext */
  SetAuthContext?: SetAuthContext;
  /** DBCC */
  DBCC?: Dbcc;
}
