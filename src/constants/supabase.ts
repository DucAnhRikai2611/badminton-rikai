export const TABLES = {
  EVENT: "events",
  TAG: "tags",
  EVENT_TAG: "event_tags",
  EVENT_BILL: "event_bills",
  EVENT_ATTENDANCE: "event_attendances",
};

export const SCHEMAS = {
  [TABLES.EVENT]: {
    id: "id",
    title: "title",
    description: "description",
    startAt: "start_at",
    duration: "duration",
    status: "status",
    tags: "tags",
    hostBy: "host_by",
    createdAt: "created_at",
    updatedAt: "updated_at",
    deletedAt: "deleted_at",
  },
  [TABLES.EVENT_ATTENDANCE]: {
    userId: "user_id",
    eventId: "event_id",
    leaveAt: "leave_at",
    leaveReason: "leave_reason",
    createdAt: "created_at",
  },
  [TABLES.EVENT_BILL]: {
    id: "id",
    eventId: "event_id",
    amount: "amount",
    paidBy: "paid_by",
    name: "name",
    notes: "notes",
    createdAt: "created_at",
  },
  [TABLES.EVENT_TAG]: {
    tagId: "tag_id",
    eventId: "event_id",
    createdAt: "created_at",
  },
  [TABLES.TAG]: {
    id: "id",
    name: "name",
    createdAt: "created_at",
  },
};
