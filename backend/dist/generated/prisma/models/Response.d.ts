import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
/**
 * Model Response
 *
 */
export type ResponseModel = runtime.Types.Result.DefaultSelection<Prisma.$ResponsePayload>;
export type AggregateResponse = {
    _count: ResponseCountAggregateOutputType | null;
    _avg: ResponseAvgAggregateOutputType | null;
    _sum: ResponseSumAggregateOutputType | null;
    _min: ResponseMinAggregateOutputType | null;
    _max: ResponseMaxAggregateOutputType | null;
};
export type ResponseAvgAggregateOutputType = {
    id: number | null;
    requestId: number | null;
    statusCode: number | null;
    responseTime: number | null;
};
export type ResponseSumAggregateOutputType = {
    id: number | null;
    requestId: number | null;
    statusCode: number | null;
    responseTime: number | null;
};
export type ResponseMinAggregateOutputType = {
    id: number | null;
    requestId: number | null;
    statusCode: number | null;
    statusText: string | null;
    responseTime: number | null;
    size: string | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type ResponseMaxAggregateOutputType = {
    id: number | null;
    requestId: number | null;
    statusCode: number | null;
    statusText: string | null;
    responseTime: number | null;
    size: string | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type ResponseCountAggregateOutputType = {
    id: number;
    requestId: number;
    statusCode: number;
    statusText: number;
    responseTime: number;
    size: number;
    timeline: number;
    breakdown: number;
    headers: number;
    body: number;
    cookies: number;
    createdAt: number;
    updatedAt: number;
    _all: number;
};
export type ResponseAvgAggregateInputType = {
    id?: true;
    requestId?: true;
    statusCode?: true;
    responseTime?: true;
};
export type ResponseSumAggregateInputType = {
    id?: true;
    requestId?: true;
    statusCode?: true;
    responseTime?: true;
};
export type ResponseMinAggregateInputType = {
    id?: true;
    requestId?: true;
    statusCode?: true;
    statusText?: true;
    responseTime?: true;
    size?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type ResponseMaxAggregateInputType = {
    id?: true;
    requestId?: true;
    statusCode?: true;
    statusText?: true;
    responseTime?: true;
    size?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type ResponseCountAggregateInputType = {
    id?: true;
    requestId?: true;
    statusCode?: true;
    statusText?: true;
    responseTime?: true;
    size?: true;
    timeline?: true;
    breakdown?: true;
    headers?: true;
    body?: true;
    cookies?: true;
    createdAt?: true;
    updatedAt?: true;
    _all?: true;
};
export type ResponseAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which Response to aggregate.
     */
    where?: Prisma.ResponseWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Responses to fetch.
     */
    orderBy?: Prisma.ResponseOrderByWithRelationInput | Prisma.ResponseOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: Prisma.ResponseWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Responses from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Responses.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned Responses
    **/
    _count?: true | ResponseCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
    **/
    _avg?: ResponseAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
    **/
    _sum?: ResponseSumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
    **/
    _min?: ResponseMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
    **/
    _max?: ResponseMaxAggregateInputType;
};
export type GetResponseAggregateType<T extends ResponseAggregateArgs> = {
    [P in keyof T & keyof AggregateResponse]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateResponse[P]> : Prisma.GetScalarType<T[P], AggregateResponse[P]>;
};
export type ResponseGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ResponseWhereInput;
    orderBy?: Prisma.ResponseOrderByWithAggregationInput | Prisma.ResponseOrderByWithAggregationInput[];
    by: Prisma.ResponseScalarFieldEnum[] | Prisma.ResponseScalarFieldEnum;
    having?: Prisma.ResponseScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: ResponseCountAggregateInputType | true;
    _avg?: ResponseAvgAggregateInputType;
    _sum?: ResponseSumAggregateInputType;
    _min?: ResponseMinAggregateInputType;
    _max?: ResponseMaxAggregateInputType;
};
export type ResponseGroupByOutputType = {
    id: number;
    requestId: number;
    statusCode: number;
    statusText: string;
    responseTime: number;
    size: string;
    timeline: runtime.JsonValue;
    breakdown: runtime.JsonValue;
    headers: runtime.JsonValue;
    body: runtime.JsonValue;
    cookies: runtime.JsonValue | null;
    createdAt: Date;
    updatedAt: Date;
    _count: ResponseCountAggregateOutputType | null;
    _avg: ResponseAvgAggregateOutputType | null;
    _sum: ResponseSumAggregateOutputType | null;
    _min: ResponseMinAggregateOutputType | null;
    _max: ResponseMaxAggregateOutputType | null;
};
type GetResponseGroupByPayload<T extends ResponseGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<ResponseGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof ResponseGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], ResponseGroupByOutputType[P]> : Prisma.GetScalarType<T[P], ResponseGroupByOutputType[P]>;
}>>;
export type ResponseWhereInput = {
    AND?: Prisma.ResponseWhereInput | Prisma.ResponseWhereInput[];
    OR?: Prisma.ResponseWhereInput[];
    NOT?: Prisma.ResponseWhereInput | Prisma.ResponseWhereInput[];
    id?: Prisma.IntFilter<"Response"> | number;
    requestId?: Prisma.IntFilter<"Response"> | number;
    statusCode?: Prisma.IntFilter<"Response"> | number;
    statusText?: Prisma.StringFilter<"Response"> | string;
    responseTime?: Prisma.IntFilter<"Response"> | number;
    size?: Prisma.StringFilter<"Response"> | string;
    timeline?: Prisma.JsonFilter<"Response">;
    breakdown?: Prisma.JsonFilter<"Response">;
    headers?: Prisma.JsonFilter<"Response">;
    body?: Prisma.JsonFilter<"Response">;
    cookies?: Prisma.JsonNullableFilter<"Response">;
    createdAt?: Prisma.DateTimeFilter<"Response"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"Response"> | Date | string;
    request?: Prisma.XOR<Prisma.RequestsScalarRelationFilter, Prisma.RequestsWhereInput>;
};
export type ResponseOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    requestId?: Prisma.SortOrder;
    statusCode?: Prisma.SortOrder;
    statusText?: Prisma.SortOrder;
    responseTime?: Prisma.SortOrder;
    size?: Prisma.SortOrder;
    timeline?: Prisma.SortOrder;
    breakdown?: Prisma.SortOrder;
    headers?: Prisma.SortOrder;
    body?: Prisma.SortOrder;
    cookies?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    request?: Prisma.RequestsOrderByWithRelationInput;
};
export type ResponseWhereUniqueInput = Prisma.AtLeast<{
    id?: number;
    AND?: Prisma.ResponseWhereInput | Prisma.ResponseWhereInput[];
    OR?: Prisma.ResponseWhereInput[];
    NOT?: Prisma.ResponseWhereInput | Prisma.ResponseWhereInput[];
    requestId?: Prisma.IntFilter<"Response"> | number;
    statusCode?: Prisma.IntFilter<"Response"> | number;
    statusText?: Prisma.StringFilter<"Response"> | string;
    responseTime?: Prisma.IntFilter<"Response"> | number;
    size?: Prisma.StringFilter<"Response"> | string;
    timeline?: Prisma.JsonFilter<"Response">;
    breakdown?: Prisma.JsonFilter<"Response">;
    headers?: Prisma.JsonFilter<"Response">;
    body?: Prisma.JsonFilter<"Response">;
    cookies?: Prisma.JsonNullableFilter<"Response">;
    createdAt?: Prisma.DateTimeFilter<"Response"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"Response"> | Date | string;
    request?: Prisma.XOR<Prisma.RequestsScalarRelationFilter, Prisma.RequestsWhereInput>;
}, "id">;
export type ResponseOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    requestId?: Prisma.SortOrder;
    statusCode?: Prisma.SortOrder;
    statusText?: Prisma.SortOrder;
    responseTime?: Prisma.SortOrder;
    size?: Prisma.SortOrder;
    timeline?: Prisma.SortOrder;
    breakdown?: Prisma.SortOrder;
    headers?: Prisma.SortOrder;
    body?: Prisma.SortOrder;
    cookies?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    _count?: Prisma.ResponseCountOrderByAggregateInput;
    _avg?: Prisma.ResponseAvgOrderByAggregateInput;
    _max?: Prisma.ResponseMaxOrderByAggregateInput;
    _min?: Prisma.ResponseMinOrderByAggregateInput;
    _sum?: Prisma.ResponseSumOrderByAggregateInput;
};
export type ResponseScalarWhereWithAggregatesInput = {
    AND?: Prisma.ResponseScalarWhereWithAggregatesInput | Prisma.ResponseScalarWhereWithAggregatesInput[];
    OR?: Prisma.ResponseScalarWhereWithAggregatesInput[];
    NOT?: Prisma.ResponseScalarWhereWithAggregatesInput | Prisma.ResponseScalarWhereWithAggregatesInput[];
    id?: Prisma.IntWithAggregatesFilter<"Response"> | number;
    requestId?: Prisma.IntWithAggregatesFilter<"Response"> | number;
    statusCode?: Prisma.IntWithAggregatesFilter<"Response"> | number;
    statusText?: Prisma.StringWithAggregatesFilter<"Response"> | string;
    responseTime?: Prisma.IntWithAggregatesFilter<"Response"> | number;
    size?: Prisma.StringWithAggregatesFilter<"Response"> | string;
    timeline?: Prisma.JsonWithAggregatesFilter<"Response">;
    breakdown?: Prisma.JsonWithAggregatesFilter<"Response">;
    headers?: Prisma.JsonWithAggregatesFilter<"Response">;
    body?: Prisma.JsonWithAggregatesFilter<"Response">;
    cookies?: Prisma.JsonNullableWithAggregatesFilter<"Response">;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"Response"> | Date | string;
    updatedAt?: Prisma.DateTimeWithAggregatesFilter<"Response"> | Date | string;
};
export type ResponseCreateInput = {
    statusCode: number;
    statusText: string;
    responseTime: number;
    size: string;
    timeline: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    breakdown: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    headers: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    body: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    cookies?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    request: Prisma.RequestsCreateNestedOneWithoutResponseInput;
};
export type ResponseUncheckedCreateInput = {
    id?: number;
    requestId: number;
    statusCode: number;
    statusText: string;
    responseTime: number;
    size: string;
    timeline: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    breakdown: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    headers: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    body: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    cookies?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type ResponseUpdateInput = {
    statusCode?: Prisma.IntFieldUpdateOperationsInput | number;
    statusText?: Prisma.StringFieldUpdateOperationsInput | string;
    responseTime?: Prisma.IntFieldUpdateOperationsInput | number;
    size?: Prisma.StringFieldUpdateOperationsInput | string;
    timeline?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    breakdown?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    headers?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    body?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    cookies?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    request?: Prisma.RequestsUpdateOneRequiredWithoutResponseNestedInput;
};
export type ResponseUncheckedUpdateInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    requestId?: Prisma.IntFieldUpdateOperationsInput | number;
    statusCode?: Prisma.IntFieldUpdateOperationsInput | number;
    statusText?: Prisma.StringFieldUpdateOperationsInput | string;
    responseTime?: Prisma.IntFieldUpdateOperationsInput | number;
    size?: Prisma.StringFieldUpdateOperationsInput | string;
    timeline?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    breakdown?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    headers?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    body?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    cookies?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ResponseCreateManyInput = {
    id?: number;
    requestId: number;
    statusCode: number;
    statusText: string;
    responseTime: number;
    size: string;
    timeline: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    breakdown: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    headers: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    body: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    cookies?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type ResponseUpdateManyMutationInput = {
    statusCode?: Prisma.IntFieldUpdateOperationsInput | number;
    statusText?: Prisma.StringFieldUpdateOperationsInput | string;
    responseTime?: Prisma.IntFieldUpdateOperationsInput | number;
    size?: Prisma.StringFieldUpdateOperationsInput | string;
    timeline?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    breakdown?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    headers?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    body?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    cookies?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ResponseUncheckedUpdateManyInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    requestId?: Prisma.IntFieldUpdateOperationsInput | number;
    statusCode?: Prisma.IntFieldUpdateOperationsInput | number;
    statusText?: Prisma.StringFieldUpdateOperationsInput | string;
    responseTime?: Prisma.IntFieldUpdateOperationsInput | number;
    size?: Prisma.StringFieldUpdateOperationsInput | string;
    timeline?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    breakdown?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    headers?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    body?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    cookies?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ResponseListRelationFilter = {
    every?: Prisma.ResponseWhereInput;
    some?: Prisma.ResponseWhereInput;
    none?: Prisma.ResponseWhereInput;
};
export type ResponseOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type ResponseCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    requestId?: Prisma.SortOrder;
    statusCode?: Prisma.SortOrder;
    statusText?: Prisma.SortOrder;
    responseTime?: Prisma.SortOrder;
    size?: Prisma.SortOrder;
    timeline?: Prisma.SortOrder;
    breakdown?: Prisma.SortOrder;
    headers?: Prisma.SortOrder;
    body?: Prisma.SortOrder;
    cookies?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type ResponseAvgOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    requestId?: Prisma.SortOrder;
    statusCode?: Prisma.SortOrder;
    responseTime?: Prisma.SortOrder;
};
export type ResponseMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    requestId?: Prisma.SortOrder;
    statusCode?: Prisma.SortOrder;
    statusText?: Prisma.SortOrder;
    responseTime?: Prisma.SortOrder;
    size?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type ResponseMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    requestId?: Prisma.SortOrder;
    statusCode?: Prisma.SortOrder;
    statusText?: Prisma.SortOrder;
    responseTime?: Prisma.SortOrder;
    size?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type ResponseSumOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    requestId?: Prisma.SortOrder;
    statusCode?: Prisma.SortOrder;
    responseTime?: Prisma.SortOrder;
};
export type ResponseCreateNestedManyWithoutRequestInput = {
    create?: Prisma.XOR<Prisma.ResponseCreateWithoutRequestInput, Prisma.ResponseUncheckedCreateWithoutRequestInput> | Prisma.ResponseCreateWithoutRequestInput[] | Prisma.ResponseUncheckedCreateWithoutRequestInput[];
    connectOrCreate?: Prisma.ResponseCreateOrConnectWithoutRequestInput | Prisma.ResponseCreateOrConnectWithoutRequestInput[];
    createMany?: Prisma.ResponseCreateManyRequestInputEnvelope;
    connect?: Prisma.ResponseWhereUniqueInput | Prisma.ResponseWhereUniqueInput[];
};
export type ResponseUncheckedCreateNestedManyWithoutRequestInput = {
    create?: Prisma.XOR<Prisma.ResponseCreateWithoutRequestInput, Prisma.ResponseUncheckedCreateWithoutRequestInput> | Prisma.ResponseCreateWithoutRequestInput[] | Prisma.ResponseUncheckedCreateWithoutRequestInput[];
    connectOrCreate?: Prisma.ResponseCreateOrConnectWithoutRequestInput | Prisma.ResponseCreateOrConnectWithoutRequestInput[];
    createMany?: Prisma.ResponseCreateManyRequestInputEnvelope;
    connect?: Prisma.ResponseWhereUniqueInput | Prisma.ResponseWhereUniqueInput[];
};
export type ResponseUpdateManyWithoutRequestNestedInput = {
    create?: Prisma.XOR<Prisma.ResponseCreateWithoutRequestInput, Prisma.ResponseUncheckedCreateWithoutRequestInput> | Prisma.ResponseCreateWithoutRequestInput[] | Prisma.ResponseUncheckedCreateWithoutRequestInput[];
    connectOrCreate?: Prisma.ResponseCreateOrConnectWithoutRequestInput | Prisma.ResponseCreateOrConnectWithoutRequestInput[];
    upsert?: Prisma.ResponseUpsertWithWhereUniqueWithoutRequestInput | Prisma.ResponseUpsertWithWhereUniqueWithoutRequestInput[];
    createMany?: Prisma.ResponseCreateManyRequestInputEnvelope;
    set?: Prisma.ResponseWhereUniqueInput | Prisma.ResponseWhereUniqueInput[];
    disconnect?: Prisma.ResponseWhereUniqueInput | Prisma.ResponseWhereUniqueInput[];
    delete?: Prisma.ResponseWhereUniqueInput | Prisma.ResponseWhereUniqueInput[];
    connect?: Prisma.ResponseWhereUniqueInput | Prisma.ResponseWhereUniqueInput[];
    update?: Prisma.ResponseUpdateWithWhereUniqueWithoutRequestInput | Prisma.ResponseUpdateWithWhereUniqueWithoutRequestInput[];
    updateMany?: Prisma.ResponseUpdateManyWithWhereWithoutRequestInput | Prisma.ResponseUpdateManyWithWhereWithoutRequestInput[];
    deleteMany?: Prisma.ResponseScalarWhereInput | Prisma.ResponseScalarWhereInput[];
};
export type ResponseUncheckedUpdateManyWithoutRequestNestedInput = {
    create?: Prisma.XOR<Prisma.ResponseCreateWithoutRequestInput, Prisma.ResponseUncheckedCreateWithoutRequestInput> | Prisma.ResponseCreateWithoutRequestInput[] | Prisma.ResponseUncheckedCreateWithoutRequestInput[];
    connectOrCreate?: Prisma.ResponseCreateOrConnectWithoutRequestInput | Prisma.ResponseCreateOrConnectWithoutRequestInput[];
    upsert?: Prisma.ResponseUpsertWithWhereUniqueWithoutRequestInput | Prisma.ResponseUpsertWithWhereUniqueWithoutRequestInput[];
    createMany?: Prisma.ResponseCreateManyRequestInputEnvelope;
    set?: Prisma.ResponseWhereUniqueInput | Prisma.ResponseWhereUniqueInput[];
    disconnect?: Prisma.ResponseWhereUniqueInput | Prisma.ResponseWhereUniqueInput[];
    delete?: Prisma.ResponseWhereUniqueInput | Prisma.ResponseWhereUniqueInput[];
    connect?: Prisma.ResponseWhereUniqueInput | Prisma.ResponseWhereUniqueInput[];
    update?: Prisma.ResponseUpdateWithWhereUniqueWithoutRequestInput | Prisma.ResponseUpdateWithWhereUniqueWithoutRequestInput[];
    updateMany?: Prisma.ResponseUpdateManyWithWhereWithoutRequestInput | Prisma.ResponseUpdateManyWithWhereWithoutRequestInput[];
    deleteMany?: Prisma.ResponseScalarWhereInput | Prisma.ResponseScalarWhereInput[];
};
export type ResponseCreateWithoutRequestInput = {
    statusCode: number;
    statusText: string;
    responseTime: number;
    size: string;
    timeline: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    breakdown: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    headers: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    body: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    cookies?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type ResponseUncheckedCreateWithoutRequestInput = {
    id?: number;
    statusCode: number;
    statusText: string;
    responseTime: number;
    size: string;
    timeline: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    breakdown: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    headers: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    body: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    cookies?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type ResponseCreateOrConnectWithoutRequestInput = {
    where: Prisma.ResponseWhereUniqueInput;
    create: Prisma.XOR<Prisma.ResponseCreateWithoutRequestInput, Prisma.ResponseUncheckedCreateWithoutRequestInput>;
};
export type ResponseCreateManyRequestInputEnvelope = {
    data: Prisma.ResponseCreateManyRequestInput | Prisma.ResponseCreateManyRequestInput[];
    skipDuplicates?: boolean;
};
export type ResponseUpsertWithWhereUniqueWithoutRequestInput = {
    where: Prisma.ResponseWhereUniqueInput;
    update: Prisma.XOR<Prisma.ResponseUpdateWithoutRequestInput, Prisma.ResponseUncheckedUpdateWithoutRequestInput>;
    create: Prisma.XOR<Prisma.ResponseCreateWithoutRequestInput, Prisma.ResponseUncheckedCreateWithoutRequestInput>;
};
export type ResponseUpdateWithWhereUniqueWithoutRequestInput = {
    where: Prisma.ResponseWhereUniqueInput;
    data: Prisma.XOR<Prisma.ResponseUpdateWithoutRequestInput, Prisma.ResponseUncheckedUpdateWithoutRequestInput>;
};
export type ResponseUpdateManyWithWhereWithoutRequestInput = {
    where: Prisma.ResponseScalarWhereInput;
    data: Prisma.XOR<Prisma.ResponseUpdateManyMutationInput, Prisma.ResponseUncheckedUpdateManyWithoutRequestInput>;
};
export type ResponseScalarWhereInput = {
    AND?: Prisma.ResponseScalarWhereInput | Prisma.ResponseScalarWhereInput[];
    OR?: Prisma.ResponseScalarWhereInput[];
    NOT?: Prisma.ResponseScalarWhereInput | Prisma.ResponseScalarWhereInput[];
    id?: Prisma.IntFilter<"Response"> | number;
    requestId?: Prisma.IntFilter<"Response"> | number;
    statusCode?: Prisma.IntFilter<"Response"> | number;
    statusText?: Prisma.StringFilter<"Response"> | string;
    responseTime?: Prisma.IntFilter<"Response"> | number;
    size?: Prisma.StringFilter<"Response"> | string;
    timeline?: Prisma.JsonFilter<"Response">;
    breakdown?: Prisma.JsonFilter<"Response">;
    headers?: Prisma.JsonFilter<"Response">;
    body?: Prisma.JsonFilter<"Response">;
    cookies?: Prisma.JsonNullableFilter<"Response">;
    createdAt?: Prisma.DateTimeFilter<"Response"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"Response"> | Date | string;
};
export type ResponseCreateManyRequestInput = {
    id?: number;
    statusCode: number;
    statusText: string;
    responseTime: number;
    size: string;
    timeline: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    breakdown: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    headers: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    body: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    cookies?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type ResponseUpdateWithoutRequestInput = {
    statusCode?: Prisma.IntFieldUpdateOperationsInput | number;
    statusText?: Prisma.StringFieldUpdateOperationsInput | string;
    responseTime?: Prisma.IntFieldUpdateOperationsInput | number;
    size?: Prisma.StringFieldUpdateOperationsInput | string;
    timeline?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    breakdown?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    headers?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    body?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    cookies?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ResponseUncheckedUpdateWithoutRequestInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    statusCode?: Prisma.IntFieldUpdateOperationsInput | number;
    statusText?: Prisma.StringFieldUpdateOperationsInput | string;
    responseTime?: Prisma.IntFieldUpdateOperationsInput | number;
    size?: Prisma.StringFieldUpdateOperationsInput | string;
    timeline?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    breakdown?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    headers?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    body?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    cookies?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ResponseUncheckedUpdateManyWithoutRequestInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    statusCode?: Prisma.IntFieldUpdateOperationsInput | number;
    statusText?: Prisma.StringFieldUpdateOperationsInput | string;
    responseTime?: Prisma.IntFieldUpdateOperationsInput | number;
    size?: Prisma.StringFieldUpdateOperationsInput | string;
    timeline?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    breakdown?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    headers?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    body?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    cookies?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ResponseSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    requestId?: boolean;
    statusCode?: boolean;
    statusText?: boolean;
    responseTime?: boolean;
    size?: boolean;
    timeline?: boolean;
    breakdown?: boolean;
    headers?: boolean;
    body?: boolean;
    cookies?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    request?: boolean | Prisma.RequestsDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["response"]>;
export type ResponseSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    requestId?: boolean;
    statusCode?: boolean;
    statusText?: boolean;
    responseTime?: boolean;
    size?: boolean;
    timeline?: boolean;
    breakdown?: boolean;
    headers?: boolean;
    body?: boolean;
    cookies?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    request?: boolean | Prisma.RequestsDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["response"]>;
export type ResponseSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    requestId?: boolean;
    statusCode?: boolean;
    statusText?: boolean;
    responseTime?: boolean;
    size?: boolean;
    timeline?: boolean;
    breakdown?: boolean;
    headers?: boolean;
    body?: boolean;
    cookies?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    request?: boolean | Prisma.RequestsDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["response"]>;
export type ResponseSelectScalar = {
    id?: boolean;
    requestId?: boolean;
    statusCode?: boolean;
    statusText?: boolean;
    responseTime?: boolean;
    size?: boolean;
    timeline?: boolean;
    breakdown?: boolean;
    headers?: boolean;
    body?: boolean;
    cookies?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
};
export type ResponseOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "requestId" | "statusCode" | "statusText" | "responseTime" | "size" | "timeline" | "breakdown" | "headers" | "body" | "cookies" | "createdAt" | "updatedAt", ExtArgs["result"]["response"]>;
export type ResponseInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    request?: boolean | Prisma.RequestsDefaultArgs<ExtArgs>;
};
export type ResponseIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    request?: boolean | Prisma.RequestsDefaultArgs<ExtArgs>;
};
export type ResponseIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    request?: boolean | Prisma.RequestsDefaultArgs<ExtArgs>;
};
export type $ResponsePayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "Response";
    objects: {
        request: Prisma.$RequestsPayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: number;
        requestId: number;
        statusCode: number;
        statusText: string;
        responseTime: number;
        size: string;
        timeline: runtime.JsonValue;
        breakdown: runtime.JsonValue;
        headers: runtime.JsonValue;
        body: runtime.JsonValue;
        cookies: runtime.JsonValue | null;
        createdAt: Date;
        updatedAt: Date;
    }, ExtArgs["result"]["response"]>;
    composites: {};
};
export type ResponseGetPayload<S extends boolean | null | undefined | ResponseDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$ResponsePayload, S>;
export type ResponseCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<ResponseFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: ResponseCountAggregateInputType | true;
};
export interface ResponseDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['Response'];
        meta: {
            name: 'Response';
        };
    };
    /**
     * Find zero or one Response that matches the filter.
     * @param {ResponseFindUniqueArgs} args - Arguments to find a Response
     * @example
     * // Get one Response
     * const response = await prisma.response.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ResponseFindUniqueArgs>(args: Prisma.SelectSubset<T, ResponseFindUniqueArgs<ExtArgs>>): Prisma.Prisma__ResponseClient<runtime.Types.Result.GetResult<Prisma.$ResponsePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find one Response that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ResponseFindUniqueOrThrowArgs} args - Arguments to find a Response
     * @example
     * // Get one Response
     * const response = await prisma.response.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ResponseFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, ResponseFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__ResponseClient<runtime.Types.Result.GetResult<Prisma.$ResponsePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first Response that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ResponseFindFirstArgs} args - Arguments to find a Response
     * @example
     * // Get one Response
     * const response = await prisma.response.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ResponseFindFirstArgs>(args?: Prisma.SelectSubset<T, ResponseFindFirstArgs<ExtArgs>>): Prisma.Prisma__ResponseClient<runtime.Types.Result.GetResult<Prisma.$ResponsePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first Response that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ResponseFindFirstOrThrowArgs} args - Arguments to find a Response
     * @example
     * // Get one Response
     * const response = await prisma.response.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ResponseFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, ResponseFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__ResponseClient<runtime.Types.Result.GetResult<Prisma.$ResponsePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find zero or more Responses that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ResponseFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Responses
     * const responses = await prisma.response.findMany()
     *
     * // Get first 10 Responses
     * const responses = await prisma.response.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const responseWithIdOnly = await prisma.response.findMany({ select: { id: true } })
     *
     */
    findMany<T extends ResponseFindManyArgs>(args?: Prisma.SelectSubset<T, ResponseFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ResponsePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    /**
     * Create a Response.
     * @param {ResponseCreateArgs} args - Arguments to create a Response.
     * @example
     * // Create one Response
     * const Response = await prisma.response.create({
     *   data: {
     *     // ... data to create a Response
     *   }
     * })
     *
     */
    create<T extends ResponseCreateArgs>(args: Prisma.SelectSubset<T, ResponseCreateArgs<ExtArgs>>): Prisma.Prisma__ResponseClient<runtime.Types.Result.GetResult<Prisma.$ResponsePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Create many Responses.
     * @param {ResponseCreateManyArgs} args - Arguments to create many Responses.
     * @example
     * // Create many Responses
     * const response = await prisma.response.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends ResponseCreateManyArgs>(args?: Prisma.SelectSubset<T, ResponseCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Create many Responses and returns the data saved in the database.
     * @param {ResponseCreateManyAndReturnArgs} args - Arguments to create many Responses.
     * @example
     * // Create many Responses
     * const response = await prisma.response.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many Responses and only return the `id`
     * const responseWithIdOnly = await prisma.response.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends ResponseCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, ResponseCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ResponsePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    /**
     * Delete a Response.
     * @param {ResponseDeleteArgs} args - Arguments to delete one Response.
     * @example
     * // Delete one Response
     * const Response = await prisma.response.delete({
     *   where: {
     *     // ... filter to delete one Response
     *   }
     * })
     *
     */
    delete<T extends ResponseDeleteArgs>(args: Prisma.SelectSubset<T, ResponseDeleteArgs<ExtArgs>>): Prisma.Prisma__ResponseClient<runtime.Types.Result.GetResult<Prisma.$ResponsePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Update one Response.
     * @param {ResponseUpdateArgs} args - Arguments to update one Response.
     * @example
     * // Update one Response
     * const response = await prisma.response.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends ResponseUpdateArgs>(args: Prisma.SelectSubset<T, ResponseUpdateArgs<ExtArgs>>): Prisma.Prisma__ResponseClient<runtime.Types.Result.GetResult<Prisma.$ResponsePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Delete zero or more Responses.
     * @param {ResponseDeleteManyArgs} args - Arguments to filter Responses to delete.
     * @example
     * // Delete a few Responses
     * const { count } = await prisma.response.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends ResponseDeleteManyArgs>(args?: Prisma.SelectSubset<T, ResponseDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more Responses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ResponseUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Responses
     * const response = await prisma.response.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends ResponseUpdateManyArgs>(args: Prisma.SelectSubset<T, ResponseUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more Responses and returns the data updated in the database.
     * @param {ResponseUpdateManyAndReturnArgs} args - Arguments to update many Responses.
     * @example
     * // Update many Responses
     * const response = await prisma.response.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more Responses and only return the `id`
     * const responseWithIdOnly = await prisma.response.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    updateManyAndReturn<T extends ResponseUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, ResponseUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ResponsePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    /**
     * Create or update one Response.
     * @param {ResponseUpsertArgs} args - Arguments to update or create a Response.
     * @example
     * // Update or create a Response
     * const response = await prisma.response.upsert({
     *   create: {
     *     // ... data to create a Response
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Response we want to update
     *   }
     * })
     */
    upsert<T extends ResponseUpsertArgs>(args: Prisma.SelectSubset<T, ResponseUpsertArgs<ExtArgs>>): Prisma.Prisma__ResponseClient<runtime.Types.Result.GetResult<Prisma.$ResponsePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Count the number of Responses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ResponseCountArgs} args - Arguments to filter Responses to count.
     * @example
     * // Count the number of Responses
     * const count = await prisma.response.count({
     *   where: {
     *     // ... the filter for the Responses we want to count
     *   }
     * })
    **/
    count<T extends ResponseCountArgs>(args?: Prisma.Subset<T, ResponseCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], ResponseCountAggregateOutputType> : number>;
    /**
     * Allows you to perform aggregations operations on a Response.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ResponseAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ResponseAggregateArgs>(args: Prisma.Subset<T, ResponseAggregateArgs>): Prisma.PrismaPromise<GetResponseAggregateType<T>>;
    /**
     * Group by Response.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ResponseGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     *
    **/
    groupBy<T extends ResponseGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: ResponseGroupByArgs['orderBy'];
    } : {
        orderBy?: ResponseGroupByArgs['orderBy'];
    }, OrderFields extends Prisma.ExcludeUnderscoreKeys<Prisma.Keys<Prisma.MaybeTupleToUnion<T['orderBy']>>>, ByFields extends Prisma.MaybeTupleToUnion<T['by']>, ByValid extends Prisma.Has<ByFields, OrderFields>, HavingFields extends Prisma.GetHavingFields<T['having']>, HavingValid extends Prisma.Has<ByFields, HavingFields>, ByEmpty extends T['by'] extends never[] ? Prisma.True : Prisma.False, InputErrors extends ByEmpty extends Prisma.True ? `Error: "by" must not be empty.` : HavingValid extends Prisma.False ? {
        [P in HavingFields]: P extends ByFields ? never : P extends string ? `Error: Field "${P}" used in "having" needs to be provided in "by".` : [
            Error,
            'Field ',
            P,
            ` in "having" needs to be provided in "by"`
        ];
    }[HavingFields] : 'take' extends Prisma.Keys<T> ? 'orderBy' extends Prisma.Keys<T> ? ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields] : 'Error: If you provide "take", you also need to provide "orderBy"' : 'skip' extends Prisma.Keys<T> ? 'orderBy' extends Prisma.Keys<T> ? ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields] : 'Error: If you provide "skip", you also need to provide "orderBy"' : ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, ResponseGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetResponseGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the Response model
     */
    readonly fields: ResponseFieldRefs;
}
/**
 * The delegate class that acts as a "Promise-like" for Response.
 * Why is this prefixed with `Prisma__`?
 * Because we want to prevent naming conflicts as mentioned in
 * https://github.com/prisma/prisma-client-js/issues/707
 */
export interface Prisma__ResponseClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    request<T extends Prisma.RequestsDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.RequestsDefaultArgs<ExtArgs>>): Prisma.Prisma__RequestsClient<runtime.Types.Result.GetResult<Prisma.$RequestsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
/**
 * Fields of the Response model
 */
export interface ResponseFieldRefs {
    readonly id: Prisma.FieldRef<"Response", 'Int'>;
    readonly requestId: Prisma.FieldRef<"Response", 'Int'>;
    readonly statusCode: Prisma.FieldRef<"Response", 'Int'>;
    readonly statusText: Prisma.FieldRef<"Response", 'String'>;
    readonly responseTime: Prisma.FieldRef<"Response", 'Int'>;
    readonly size: Prisma.FieldRef<"Response", 'String'>;
    readonly timeline: Prisma.FieldRef<"Response", 'Json'>;
    readonly breakdown: Prisma.FieldRef<"Response", 'Json'>;
    readonly headers: Prisma.FieldRef<"Response", 'Json'>;
    readonly body: Prisma.FieldRef<"Response", 'Json'>;
    readonly cookies: Prisma.FieldRef<"Response", 'Json'>;
    readonly createdAt: Prisma.FieldRef<"Response", 'DateTime'>;
    readonly updatedAt: Prisma.FieldRef<"Response", 'DateTime'>;
}
/**
 * Response findUnique
 */
export type ResponseFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Response
     */
    select?: Prisma.ResponseSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Response
     */
    omit?: Prisma.ResponseOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.ResponseInclude<ExtArgs> | null;
    /**
     * Filter, which Response to fetch.
     */
    where: Prisma.ResponseWhereUniqueInput;
};
/**
 * Response findUniqueOrThrow
 */
export type ResponseFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Response
     */
    select?: Prisma.ResponseSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Response
     */
    omit?: Prisma.ResponseOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.ResponseInclude<ExtArgs> | null;
    /**
     * Filter, which Response to fetch.
     */
    where: Prisma.ResponseWhereUniqueInput;
};
/**
 * Response findFirst
 */
export type ResponseFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Response
     */
    select?: Prisma.ResponseSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Response
     */
    omit?: Prisma.ResponseOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.ResponseInclude<ExtArgs> | null;
    /**
     * Filter, which Response to fetch.
     */
    where?: Prisma.ResponseWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Responses to fetch.
     */
    orderBy?: Prisma.ResponseOrderByWithRelationInput | Prisma.ResponseOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Responses.
     */
    cursor?: Prisma.ResponseWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Responses from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Responses.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Responses.
     */
    distinct?: Prisma.ResponseScalarFieldEnum | Prisma.ResponseScalarFieldEnum[];
};
/**
 * Response findFirstOrThrow
 */
export type ResponseFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Response
     */
    select?: Prisma.ResponseSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Response
     */
    omit?: Prisma.ResponseOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.ResponseInclude<ExtArgs> | null;
    /**
     * Filter, which Response to fetch.
     */
    where?: Prisma.ResponseWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Responses to fetch.
     */
    orderBy?: Prisma.ResponseOrderByWithRelationInput | Prisma.ResponseOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Responses.
     */
    cursor?: Prisma.ResponseWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Responses from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Responses.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Responses.
     */
    distinct?: Prisma.ResponseScalarFieldEnum | Prisma.ResponseScalarFieldEnum[];
};
/**
 * Response findMany
 */
export type ResponseFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Response
     */
    select?: Prisma.ResponseSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Response
     */
    omit?: Prisma.ResponseOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.ResponseInclude<ExtArgs> | null;
    /**
     * Filter, which Responses to fetch.
     */
    where?: Prisma.ResponseWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Responses to fetch.
     */
    orderBy?: Prisma.ResponseOrderByWithRelationInput | Prisma.ResponseOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing Responses.
     */
    cursor?: Prisma.ResponseWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Responses from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Responses.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Responses.
     */
    distinct?: Prisma.ResponseScalarFieldEnum | Prisma.ResponseScalarFieldEnum[];
};
/**
 * Response create
 */
export type ResponseCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Response
     */
    select?: Prisma.ResponseSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Response
     */
    omit?: Prisma.ResponseOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.ResponseInclude<ExtArgs> | null;
    /**
     * The data needed to create a Response.
     */
    data: Prisma.XOR<Prisma.ResponseCreateInput, Prisma.ResponseUncheckedCreateInput>;
};
/**
 * Response createMany
 */
export type ResponseCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to create many Responses.
     */
    data: Prisma.ResponseCreateManyInput | Prisma.ResponseCreateManyInput[];
    skipDuplicates?: boolean;
};
/**
 * Response createManyAndReturn
 */
export type ResponseCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Response
     */
    select?: Prisma.ResponseSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the Response
     */
    omit?: Prisma.ResponseOmit<ExtArgs> | null;
    /**
     * The data used to create many Responses.
     */
    data: Prisma.ResponseCreateManyInput | Prisma.ResponseCreateManyInput[];
    skipDuplicates?: boolean;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.ResponseIncludeCreateManyAndReturn<ExtArgs> | null;
};
/**
 * Response update
 */
export type ResponseUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Response
     */
    select?: Prisma.ResponseSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Response
     */
    omit?: Prisma.ResponseOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.ResponseInclude<ExtArgs> | null;
    /**
     * The data needed to update a Response.
     */
    data: Prisma.XOR<Prisma.ResponseUpdateInput, Prisma.ResponseUncheckedUpdateInput>;
    /**
     * Choose, which Response to update.
     */
    where: Prisma.ResponseWhereUniqueInput;
};
/**
 * Response updateMany
 */
export type ResponseUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to update Responses.
     */
    data: Prisma.XOR<Prisma.ResponseUpdateManyMutationInput, Prisma.ResponseUncheckedUpdateManyInput>;
    /**
     * Filter which Responses to update
     */
    where?: Prisma.ResponseWhereInput;
    /**
     * Limit how many Responses to update.
     */
    limit?: number;
};
/**
 * Response updateManyAndReturn
 */
export type ResponseUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Response
     */
    select?: Prisma.ResponseSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the Response
     */
    omit?: Prisma.ResponseOmit<ExtArgs> | null;
    /**
     * The data used to update Responses.
     */
    data: Prisma.XOR<Prisma.ResponseUpdateManyMutationInput, Prisma.ResponseUncheckedUpdateManyInput>;
    /**
     * Filter which Responses to update
     */
    where?: Prisma.ResponseWhereInput;
    /**
     * Limit how many Responses to update.
     */
    limit?: number;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.ResponseIncludeUpdateManyAndReturn<ExtArgs> | null;
};
/**
 * Response upsert
 */
export type ResponseUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Response
     */
    select?: Prisma.ResponseSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Response
     */
    omit?: Prisma.ResponseOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.ResponseInclude<ExtArgs> | null;
    /**
     * The filter to search for the Response to update in case it exists.
     */
    where: Prisma.ResponseWhereUniqueInput;
    /**
     * In case the Response found by the `where` argument doesn't exist, create a new Response with this data.
     */
    create: Prisma.XOR<Prisma.ResponseCreateInput, Prisma.ResponseUncheckedCreateInput>;
    /**
     * In case the Response was found with the provided `where` argument, update it with this data.
     */
    update: Prisma.XOR<Prisma.ResponseUpdateInput, Prisma.ResponseUncheckedUpdateInput>;
};
/**
 * Response delete
 */
export type ResponseDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Response
     */
    select?: Prisma.ResponseSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Response
     */
    omit?: Prisma.ResponseOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.ResponseInclude<ExtArgs> | null;
    /**
     * Filter which Response to delete.
     */
    where: Prisma.ResponseWhereUniqueInput;
};
/**
 * Response deleteMany
 */
export type ResponseDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which Responses to delete
     */
    where?: Prisma.ResponseWhereInput;
    /**
     * Limit how many Responses to delete.
     */
    limit?: number;
};
/**
 * Response without action
 */
export type ResponseDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Response
     */
    select?: Prisma.ResponseSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Response
     */
    omit?: Prisma.ResponseOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.ResponseInclude<ExtArgs> | null;
};
export {};
//# sourceMappingURL=Response.d.ts.map