import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
/**
 * Model BodyField
 *
 */
export type BodyFieldModel = runtime.Types.Result.DefaultSelection<Prisma.$BodyFieldPayload>;
export type AggregateBodyField = {
    _count: BodyFieldCountAggregateOutputType | null;
    _avg: BodyFieldAvgAggregateOutputType | null;
    _sum: BodyFieldSumAggregateOutputType | null;
    _min: BodyFieldMinAggregateOutputType | null;
    _max: BodyFieldMaxAggregateOutputType | null;
};
export type BodyFieldAvgAggregateOutputType = {
    id: number | null;
    requestId: number | null;
};
export type BodyFieldSumAggregateOutputType = {
    id: number | null;
    requestId: number | null;
};
export type BodyFieldMinAggregateOutputType = {
    id: number | null;
    key: string | null;
    value: string | null;
    type: string | null;
    description: string | null;
    enabled: boolean | null;
    requestId: number | null;
};
export type BodyFieldMaxAggregateOutputType = {
    id: number | null;
    key: string | null;
    value: string | null;
    type: string | null;
    description: string | null;
    enabled: boolean | null;
    requestId: number | null;
};
export type BodyFieldCountAggregateOutputType = {
    id: number;
    key: number;
    value: number;
    type: number;
    description: number;
    enabled: number;
    requestId: number;
    _all: number;
};
export type BodyFieldAvgAggregateInputType = {
    id?: true;
    requestId?: true;
};
export type BodyFieldSumAggregateInputType = {
    id?: true;
    requestId?: true;
};
export type BodyFieldMinAggregateInputType = {
    id?: true;
    key?: true;
    value?: true;
    type?: true;
    description?: true;
    enabled?: true;
    requestId?: true;
};
export type BodyFieldMaxAggregateInputType = {
    id?: true;
    key?: true;
    value?: true;
    type?: true;
    description?: true;
    enabled?: true;
    requestId?: true;
};
export type BodyFieldCountAggregateInputType = {
    id?: true;
    key?: true;
    value?: true;
    type?: true;
    description?: true;
    enabled?: true;
    requestId?: true;
    _all?: true;
};
export type BodyFieldAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which BodyField to aggregate.
     */
    where?: Prisma.BodyFieldWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of BodyFields to fetch.
     */
    orderBy?: Prisma.BodyFieldOrderByWithRelationInput | Prisma.BodyFieldOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: Prisma.BodyFieldWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` BodyFields from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` BodyFields.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned BodyFields
    **/
    _count?: true | BodyFieldCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
    **/
    _avg?: BodyFieldAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
    **/
    _sum?: BodyFieldSumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
    **/
    _min?: BodyFieldMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
    **/
    _max?: BodyFieldMaxAggregateInputType;
};
export type GetBodyFieldAggregateType<T extends BodyFieldAggregateArgs> = {
    [P in keyof T & keyof AggregateBodyField]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateBodyField[P]> : Prisma.GetScalarType<T[P], AggregateBodyField[P]>;
};
export type BodyFieldGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.BodyFieldWhereInput;
    orderBy?: Prisma.BodyFieldOrderByWithAggregationInput | Prisma.BodyFieldOrderByWithAggregationInput[];
    by: Prisma.BodyFieldScalarFieldEnum[] | Prisma.BodyFieldScalarFieldEnum;
    having?: Prisma.BodyFieldScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: BodyFieldCountAggregateInputType | true;
    _avg?: BodyFieldAvgAggregateInputType;
    _sum?: BodyFieldSumAggregateInputType;
    _min?: BodyFieldMinAggregateInputType;
    _max?: BodyFieldMaxAggregateInputType;
};
export type BodyFieldGroupByOutputType = {
    id: number;
    key: string;
    value: string | null;
    type: string;
    description: string | null;
    enabled: boolean;
    requestId: number;
    _count: BodyFieldCountAggregateOutputType | null;
    _avg: BodyFieldAvgAggregateOutputType | null;
    _sum: BodyFieldSumAggregateOutputType | null;
    _min: BodyFieldMinAggregateOutputType | null;
    _max: BodyFieldMaxAggregateOutputType | null;
};
type GetBodyFieldGroupByPayload<T extends BodyFieldGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<BodyFieldGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof BodyFieldGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], BodyFieldGroupByOutputType[P]> : Prisma.GetScalarType<T[P], BodyFieldGroupByOutputType[P]>;
}>>;
export type BodyFieldWhereInput = {
    AND?: Prisma.BodyFieldWhereInput | Prisma.BodyFieldWhereInput[];
    OR?: Prisma.BodyFieldWhereInput[];
    NOT?: Prisma.BodyFieldWhereInput | Prisma.BodyFieldWhereInput[];
    id?: Prisma.IntFilter<"BodyField"> | number;
    key?: Prisma.StringFilter<"BodyField"> | string;
    value?: Prisma.StringNullableFilter<"BodyField"> | string | null;
    type?: Prisma.StringFilter<"BodyField"> | string;
    description?: Prisma.StringNullableFilter<"BodyField"> | string | null;
    enabled?: Prisma.BoolFilter<"BodyField"> | boolean;
    requestId?: Prisma.IntFilter<"BodyField"> | number;
    request?: Prisma.XOR<Prisma.RequestsScalarRelationFilter, Prisma.RequestsWhereInput>;
};
export type BodyFieldOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    key?: Prisma.SortOrder;
    value?: Prisma.SortOrderInput | Prisma.SortOrder;
    type?: Prisma.SortOrder;
    description?: Prisma.SortOrderInput | Prisma.SortOrder;
    enabled?: Prisma.SortOrder;
    requestId?: Prisma.SortOrder;
    request?: Prisma.RequestsOrderByWithRelationInput;
};
export type BodyFieldWhereUniqueInput = Prisma.AtLeast<{
    id?: number;
    AND?: Prisma.BodyFieldWhereInput | Prisma.BodyFieldWhereInput[];
    OR?: Prisma.BodyFieldWhereInput[];
    NOT?: Prisma.BodyFieldWhereInput | Prisma.BodyFieldWhereInput[];
    key?: Prisma.StringFilter<"BodyField"> | string;
    value?: Prisma.StringNullableFilter<"BodyField"> | string | null;
    type?: Prisma.StringFilter<"BodyField"> | string;
    description?: Prisma.StringNullableFilter<"BodyField"> | string | null;
    enabled?: Prisma.BoolFilter<"BodyField"> | boolean;
    requestId?: Prisma.IntFilter<"BodyField"> | number;
    request?: Prisma.XOR<Prisma.RequestsScalarRelationFilter, Prisma.RequestsWhereInput>;
}, "id">;
export type BodyFieldOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    key?: Prisma.SortOrder;
    value?: Prisma.SortOrderInput | Prisma.SortOrder;
    type?: Prisma.SortOrder;
    description?: Prisma.SortOrderInput | Prisma.SortOrder;
    enabled?: Prisma.SortOrder;
    requestId?: Prisma.SortOrder;
    _count?: Prisma.BodyFieldCountOrderByAggregateInput;
    _avg?: Prisma.BodyFieldAvgOrderByAggregateInput;
    _max?: Prisma.BodyFieldMaxOrderByAggregateInput;
    _min?: Prisma.BodyFieldMinOrderByAggregateInput;
    _sum?: Prisma.BodyFieldSumOrderByAggregateInput;
};
export type BodyFieldScalarWhereWithAggregatesInput = {
    AND?: Prisma.BodyFieldScalarWhereWithAggregatesInput | Prisma.BodyFieldScalarWhereWithAggregatesInput[];
    OR?: Prisma.BodyFieldScalarWhereWithAggregatesInput[];
    NOT?: Prisma.BodyFieldScalarWhereWithAggregatesInput | Prisma.BodyFieldScalarWhereWithAggregatesInput[];
    id?: Prisma.IntWithAggregatesFilter<"BodyField"> | number;
    key?: Prisma.StringWithAggregatesFilter<"BodyField"> | string;
    value?: Prisma.StringNullableWithAggregatesFilter<"BodyField"> | string | null;
    type?: Prisma.StringWithAggregatesFilter<"BodyField"> | string;
    description?: Prisma.StringNullableWithAggregatesFilter<"BodyField"> | string | null;
    enabled?: Prisma.BoolWithAggregatesFilter<"BodyField"> | boolean;
    requestId?: Prisma.IntWithAggregatesFilter<"BodyField"> | number;
};
export type BodyFieldCreateInput = {
    key: string;
    value?: string | null;
    type: string;
    description?: string | null;
    enabled?: boolean;
    request: Prisma.RequestsCreateNestedOneWithoutBodyFieldsInput;
};
export type BodyFieldUncheckedCreateInput = {
    id?: number;
    key: string;
    value?: string | null;
    type: string;
    description?: string | null;
    enabled?: boolean;
    requestId: number;
};
export type BodyFieldUpdateInput = {
    key?: Prisma.StringFieldUpdateOperationsInput | string;
    value?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    type?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    enabled?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    request?: Prisma.RequestsUpdateOneRequiredWithoutBodyFieldsNestedInput;
};
export type BodyFieldUncheckedUpdateInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    key?: Prisma.StringFieldUpdateOperationsInput | string;
    value?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    type?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    enabled?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    requestId?: Prisma.IntFieldUpdateOperationsInput | number;
};
export type BodyFieldCreateManyInput = {
    id?: number;
    key: string;
    value?: string | null;
    type: string;
    description?: string | null;
    enabled?: boolean;
    requestId: number;
};
export type BodyFieldUpdateManyMutationInput = {
    key?: Prisma.StringFieldUpdateOperationsInput | string;
    value?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    type?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    enabled?: Prisma.BoolFieldUpdateOperationsInput | boolean;
};
export type BodyFieldUncheckedUpdateManyInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    key?: Prisma.StringFieldUpdateOperationsInput | string;
    value?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    type?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    enabled?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    requestId?: Prisma.IntFieldUpdateOperationsInput | number;
};
export type BodyFieldListRelationFilter = {
    every?: Prisma.BodyFieldWhereInput;
    some?: Prisma.BodyFieldWhereInput;
    none?: Prisma.BodyFieldWhereInput;
};
export type BodyFieldOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type BodyFieldCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    key?: Prisma.SortOrder;
    value?: Prisma.SortOrder;
    type?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
    enabled?: Prisma.SortOrder;
    requestId?: Prisma.SortOrder;
};
export type BodyFieldAvgOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    requestId?: Prisma.SortOrder;
};
export type BodyFieldMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    key?: Prisma.SortOrder;
    value?: Prisma.SortOrder;
    type?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
    enabled?: Prisma.SortOrder;
    requestId?: Prisma.SortOrder;
};
export type BodyFieldMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    key?: Prisma.SortOrder;
    value?: Prisma.SortOrder;
    type?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
    enabled?: Prisma.SortOrder;
    requestId?: Prisma.SortOrder;
};
export type BodyFieldSumOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    requestId?: Prisma.SortOrder;
};
export type BodyFieldCreateNestedManyWithoutRequestInput = {
    create?: Prisma.XOR<Prisma.BodyFieldCreateWithoutRequestInput, Prisma.BodyFieldUncheckedCreateWithoutRequestInput> | Prisma.BodyFieldCreateWithoutRequestInput[] | Prisma.BodyFieldUncheckedCreateWithoutRequestInput[];
    connectOrCreate?: Prisma.BodyFieldCreateOrConnectWithoutRequestInput | Prisma.BodyFieldCreateOrConnectWithoutRequestInput[];
    createMany?: Prisma.BodyFieldCreateManyRequestInputEnvelope;
    connect?: Prisma.BodyFieldWhereUniqueInput | Prisma.BodyFieldWhereUniqueInput[];
};
export type BodyFieldUncheckedCreateNestedManyWithoutRequestInput = {
    create?: Prisma.XOR<Prisma.BodyFieldCreateWithoutRequestInput, Prisma.BodyFieldUncheckedCreateWithoutRequestInput> | Prisma.BodyFieldCreateWithoutRequestInput[] | Prisma.BodyFieldUncheckedCreateWithoutRequestInput[];
    connectOrCreate?: Prisma.BodyFieldCreateOrConnectWithoutRequestInput | Prisma.BodyFieldCreateOrConnectWithoutRequestInput[];
    createMany?: Prisma.BodyFieldCreateManyRequestInputEnvelope;
    connect?: Prisma.BodyFieldWhereUniqueInput | Prisma.BodyFieldWhereUniqueInput[];
};
export type BodyFieldUpdateManyWithoutRequestNestedInput = {
    create?: Prisma.XOR<Prisma.BodyFieldCreateWithoutRequestInput, Prisma.BodyFieldUncheckedCreateWithoutRequestInput> | Prisma.BodyFieldCreateWithoutRequestInput[] | Prisma.BodyFieldUncheckedCreateWithoutRequestInput[];
    connectOrCreate?: Prisma.BodyFieldCreateOrConnectWithoutRequestInput | Prisma.BodyFieldCreateOrConnectWithoutRequestInput[];
    upsert?: Prisma.BodyFieldUpsertWithWhereUniqueWithoutRequestInput | Prisma.BodyFieldUpsertWithWhereUniqueWithoutRequestInput[];
    createMany?: Prisma.BodyFieldCreateManyRequestInputEnvelope;
    set?: Prisma.BodyFieldWhereUniqueInput | Prisma.BodyFieldWhereUniqueInput[];
    disconnect?: Prisma.BodyFieldWhereUniqueInput | Prisma.BodyFieldWhereUniqueInput[];
    delete?: Prisma.BodyFieldWhereUniqueInput | Prisma.BodyFieldWhereUniqueInput[];
    connect?: Prisma.BodyFieldWhereUniqueInput | Prisma.BodyFieldWhereUniqueInput[];
    update?: Prisma.BodyFieldUpdateWithWhereUniqueWithoutRequestInput | Prisma.BodyFieldUpdateWithWhereUniqueWithoutRequestInput[];
    updateMany?: Prisma.BodyFieldUpdateManyWithWhereWithoutRequestInput | Prisma.BodyFieldUpdateManyWithWhereWithoutRequestInput[];
    deleteMany?: Prisma.BodyFieldScalarWhereInput | Prisma.BodyFieldScalarWhereInput[];
};
export type BodyFieldUncheckedUpdateManyWithoutRequestNestedInput = {
    create?: Prisma.XOR<Prisma.BodyFieldCreateWithoutRequestInput, Prisma.BodyFieldUncheckedCreateWithoutRequestInput> | Prisma.BodyFieldCreateWithoutRequestInput[] | Prisma.BodyFieldUncheckedCreateWithoutRequestInput[];
    connectOrCreate?: Prisma.BodyFieldCreateOrConnectWithoutRequestInput | Prisma.BodyFieldCreateOrConnectWithoutRequestInput[];
    upsert?: Prisma.BodyFieldUpsertWithWhereUniqueWithoutRequestInput | Prisma.BodyFieldUpsertWithWhereUniqueWithoutRequestInput[];
    createMany?: Prisma.BodyFieldCreateManyRequestInputEnvelope;
    set?: Prisma.BodyFieldWhereUniqueInput | Prisma.BodyFieldWhereUniqueInput[];
    disconnect?: Prisma.BodyFieldWhereUniqueInput | Prisma.BodyFieldWhereUniqueInput[];
    delete?: Prisma.BodyFieldWhereUniqueInput | Prisma.BodyFieldWhereUniqueInput[];
    connect?: Prisma.BodyFieldWhereUniqueInput | Prisma.BodyFieldWhereUniqueInput[];
    update?: Prisma.BodyFieldUpdateWithWhereUniqueWithoutRequestInput | Prisma.BodyFieldUpdateWithWhereUniqueWithoutRequestInput[];
    updateMany?: Prisma.BodyFieldUpdateManyWithWhereWithoutRequestInput | Prisma.BodyFieldUpdateManyWithWhereWithoutRequestInput[];
    deleteMany?: Prisma.BodyFieldScalarWhereInput | Prisma.BodyFieldScalarWhereInput[];
};
export type BodyFieldCreateWithoutRequestInput = {
    key: string;
    value?: string | null;
    type: string;
    description?: string | null;
    enabled?: boolean;
};
export type BodyFieldUncheckedCreateWithoutRequestInput = {
    id?: number;
    key: string;
    value?: string | null;
    type: string;
    description?: string | null;
    enabled?: boolean;
};
export type BodyFieldCreateOrConnectWithoutRequestInput = {
    where: Prisma.BodyFieldWhereUniqueInput;
    create: Prisma.XOR<Prisma.BodyFieldCreateWithoutRequestInput, Prisma.BodyFieldUncheckedCreateWithoutRequestInput>;
};
export type BodyFieldCreateManyRequestInputEnvelope = {
    data: Prisma.BodyFieldCreateManyRequestInput | Prisma.BodyFieldCreateManyRequestInput[];
    skipDuplicates?: boolean;
};
export type BodyFieldUpsertWithWhereUniqueWithoutRequestInput = {
    where: Prisma.BodyFieldWhereUniqueInput;
    update: Prisma.XOR<Prisma.BodyFieldUpdateWithoutRequestInput, Prisma.BodyFieldUncheckedUpdateWithoutRequestInput>;
    create: Prisma.XOR<Prisma.BodyFieldCreateWithoutRequestInput, Prisma.BodyFieldUncheckedCreateWithoutRequestInput>;
};
export type BodyFieldUpdateWithWhereUniqueWithoutRequestInput = {
    where: Prisma.BodyFieldWhereUniqueInput;
    data: Prisma.XOR<Prisma.BodyFieldUpdateWithoutRequestInput, Prisma.BodyFieldUncheckedUpdateWithoutRequestInput>;
};
export type BodyFieldUpdateManyWithWhereWithoutRequestInput = {
    where: Prisma.BodyFieldScalarWhereInput;
    data: Prisma.XOR<Prisma.BodyFieldUpdateManyMutationInput, Prisma.BodyFieldUncheckedUpdateManyWithoutRequestInput>;
};
export type BodyFieldScalarWhereInput = {
    AND?: Prisma.BodyFieldScalarWhereInput | Prisma.BodyFieldScalarWhereInput[];
    OR?: Prisma.BodyFieldScalarWhereInput[];
    NOT?: Prisma.BodyFieldScalarWhereInput | Prisma.BodyFieldScalarWhereInput[];
    id?: Prisma.IntFilter<"BodyField"> | number;
    key?: Prisma.StringFilter<"BodyField"> | string;
    value?: Prisma.StringNullableFilter<"BodyField"> | string | null;
    type?: Prisma.StringFilter<"BodyField"> | string;
    description?: Prisma.StringNullableFilter<"BodyField"> | string | null;
    enabled?: Prisma.BoolFilter<"BodyField"> | boolean;
    requestId?: Prisma.IntFilter<"BodyField"> | number;
};
export type BodyFieldCreateManyRequestInput = {
    id?: number;
    key: string;
    value?: string | null;
    type: string;
    description?: string | null;
    enabled?: boolean;
};
export type BodyFieldUpdateWithoutRequestInput = {
    key?: Prisma.StringFieldUpdateOperationsInput | string;
    value?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    type?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    enabled?: Prisma.BoolFieldUpdateOperationsInput | boolean;
};
export type BodyFieldUncheckedUpdateWithoutRequestInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    key?: Prisma.StringFieldUpdateOperationsInput | string;
    value?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    type?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    enabled?: Prisma.BoolFieldUpdateOperationsInput | boolean;
};
export type BodyFieldUncheckedUpdateManyWithoutRequestInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    key?: Prisma.StringFieldUpdateOperationsInput | string;
    value?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    type?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    enabled?: Prisma.BoolFieldUpdateOperationsInput | boolean;
};
export type BodyFieldSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    key?: boolean;
    value?: boolean;
    type?: boolean;
    description?: boolean;
    enabled?: boolean;
    requestId?: boolean;
    request?: boolean | Prisma.RequestsDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["bodyField"]>;
export type BodyFieldSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    key?: boolean;
    value?: boolean;
    type?: boolean;
    description?: boolean;
    enabled?: boolean;
    requestId?: boolean;
    request?: boolean | Prisma.RequestsDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["bodyField"]>;
export type BodyFieldSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    key?: boolean;
    value?: boolean;
    type?: boolean;
    description?: boolean;
    enabled?: boolean;
    requestId?: boolean;
    request?: boolean | Prisma.RequestsDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["bodyField"]>;
export type BodyFieldSelectScalar = {
    id?: boolean;
    key?: boolean;
    value?: boolean;
    type?: boolean;
    description?: boolean;
    enabled?: boolean;
    requestId?: boolean;
};
export type BodyFieldOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "key" | "value" | "type" | "description" | "enabled" | "requestId", ExtArgs["result"]["bodyField"]>;
export type BodyFieldInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    request?: boolean | Prisma.RequestsDefaultArgs<ExtArgs>;
};
export type BodyFieldIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    request?: boolean | Prisma.RequestsDefaultArgs<ExtArgs>;
};
export type BodyFieldIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    request?: boolean | Prisma.RequestsDefaultArgs<ExtArgs>;
};
export type $BodyFieldPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "BodyField";
    objects: {
        request: Prisma.$RequestsPayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: number;
        key: string;
        value: string | null;
        type: string;
        description: string | null;
        enabled: boolean;
        requestId: number;
    }, ExtArgs["result"]["bodyField"]>;
    composites: {};
};
export type BodyFieldGetPayload<S extends boolean | null | undefined | BodyFieldDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$BodyFieldPayload, S>;
export type BodyFieldCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<BodyFieldFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: BodyFieldCountAggregateInputType | true;
};
export interface BodyFieldDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['BodyField'];
        meta: {
            name: 'BodyField';
        };
    };
    /**
     * Find zero or one BodyField that matches the filter.
     * @param {BodyFieldFindUniqueArgs} args - Arguments to find a BodyField
     * @example
     * // Get one BodyField
     * const bodyField = await prisma.bodyField.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends BodyFieldFindUniqueArgs>(args: Prisma.SelectSubset<T, BodyFieldFindUniqueArgs<ExtArgs>>): Prisma.Prisma__BodyFieldClient<runtime.Types.Result.GetResult<Prisma.$BodyFieldPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find one BodyField that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {BodyFieldFindUniqueOrThrowArgs} args - Arguments to find a BodyField
     * @example
     * // Get one BodyField
     * const bodyField = await prisma.bodyField.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends BodyFieldFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, BodyFieldFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__BodyFieldClient<runtime.Types.Result.GetResult<Prisma.$BodyFieldPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first BodyField that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BodyFieldFindFirstArgs} args - Arguments to find a BodyField
     * @example
     * // Get one BodyField
     * const bodyField = await prisma.bodyField.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends BodyFieldFindFirstArgs>(args?: Prisma.SelectSubset<T, BodyFieldFindFirstArgs<ExtArgs>>): Prisma.Prisma__BodyFieldClient<runtime.Types.Result.GetResult<Prisma.$BodyFieldPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first BodyField that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BodyFieldFindFirstOrThrowArgs} args - Arguments to find a BodyField
     * @example
     * // Get one BodyField
     * const bodyField = await prisma.bodyField.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends BodyFieldFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, BodyFieldFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__BodyFieldClient<runtime.Types.Result.GetResult<Prisma.$BodyFieldPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find zero or more BodyFields that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BodyFieldFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all BodyFields
     * const bodyFields = await prisma.bodyField.findMany()
     *
     * // Get first 10 BodyFields
     * const bodyFields = await prisma.bodyField.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const bodyFieldWithIdOnly = await prisma.bodyField.findMany({ select: { id: true } })
     *
     */
    findMany<T extends BodyFieldFindManyArgs>(args?: Prisma.SelectSubset<T, BodyFieldFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$BodyFieldPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    /**
     * Create a BodyField.
     * @param {BodyFieldCreateArgs} args - Arguments to create a BodyField.
     * @example
     * // Create one BodyField
     * const BodyField = await prisma.bodyField.create({
     *   data: {
     *     // ... data to create a BodyField
     *   }
     * })
     *
     */
    create<T extends BodyFieldCreateArgs>(args: Prisma.SelectSubset<T, BodyFieldCreateArgs<ExtArgs>>): Prisma.Prisma__BodyFieldClient<runtime.Types.Result.GetResult<Prisma.$BodyFieldPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Create many BodyFields.
     * @param {BodyFieldCreateManyArgs} args - Arguments to create many BodyFields.
     * @example
     * // Create many BodyFields
     * const bodyField = await prisma.bodyField.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends BodyFieldCreateManyArgs>(args?: Prisma.SelectSubset<T, BodyFieldCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Create many BodyFields and returns the data saved in the database.
     * @param {BodyFieldCreateManyAndReturnArgs} args - Arguments to create many BodyFields.
     * @example
     * // Create many BodyFields
     * const bodyField = await prisma.bodyField.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many BodyFields and only return the `id`
     * const bodyFieldWithIdOnly = await prisma.bodyField.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends BodyFieldCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, BodyFieldCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$BodyFieldPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    /**
     * Delete a BodyField.
     * @param {BodyFieldDeleteArgs} args - Arguments to delete one BodyField.
     * @example
     * // Delete one BodyField
     * const BodyField = await prisma.bodyField.delete({
     *   where: {
     *     // ... filter to delete one BodyField
     *   }
     * })
     *
     */
    delete<T extends BodyFieldDeleteArgs>(args: Prisma.SelectSubset<T, BodyFieldDeleteArgs<ExtArgs>>): Prisma.Prisma__BodyFieldClient<runtime.Types.Result.GetResult<Prisma.$BodyFieldPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Update one BodyField.
     * @param {BodyFieldUpdateArgs} args - Arguments to update one BodyField.
     * @example
     * // Update one BodyField
     * const bodyField = await prisma.bodyField.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends BodyFieldUpdateArgs>(args: Prisma.SelectSubset<T, BodyFieldUpdateArgs<ExtArgs>>): Prisma.Prisma__BodyFieldClient<runtime.Types.Result.GetResult<Prisma.$BodyFieldPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Delete zero or more BodyFields.
     * @param {BodyFieldDeleteManyArgs} args - Arguments to filter BodyFields to delete.
     * @example
     * // Delete a few BodyFields
     * const { count } = await prisma.bodyField.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends BodyFieldDeleteManyArgs>(args?: Prisma.SelectSubset<T, BodyFieldDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more BodyFields.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BodyFieldUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many BodyFields
     * const bodyField = await prisma.bodyField.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends BodyFieldUpdateManyArgs>(args: Prisma.SelectSubset<T, BodyFieldUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more BodyFields and returns the data updated in the database.
     * @param {BodyFieldUpdateManyAndReturnArgs} args - Arguments to update many BodyFields.
     * @example
     * // Update many BodyFields
     * const bodyField = await prisma.bodyField.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more BodyFields and only return the `id`
     * const bodyFieldWithIdOnly = await prisma.bodyField.updateManyAndReturn({
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
    updateManyAndReturn<T extends BodyFieldUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, BodyFieldUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$BodyFieldPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    /**
     * Create or update one BodyField.
     * @param {BodyFieldUpsertArgs} args - Arguments to update or create a BodyField.
     * @example
     * // Update or create a BodyField
     * const bodyField = await prisma.bodyField.upsert({
     *   create: {
     *     // ... data to create a BodyField
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the BodyField we want to update
     *   }
     * })
     */
    upsert<T extends BodyFieldUpsertArgs>(args: Prisma.SelectSubset<T, BodyFieldUpsertArgs<ExtArgs>>): Prisma.Prisma__BodyFieldClient<runtime.Types.Result.GetResult<Prisma.$BodyFieldPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Count the number of BodyFields.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BodyFieldCountArgs} args - Arguments to filter BodyFields to count.
     * @example
     * // Count the number of BodyFields
     * const count = await prisma.bodyField.count({
     *   where: {
     *     // ... the filter for the BodyFields we want to count
     *   }
     * })
    **/
    count<T extends BodyFieldCountArgs>(args?: Prisma.Subset<T, BodyFieldCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], BodyFieldCountAggregateOutputType> : number>;
    /**
     * Allows you to perform aggregations operations on a BodyField.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BodyFieldAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends BodyFieldAggregateArgs>(args: Prisma.Subset<T, BodyFieldAggregateArgs>): Prisma.PrismaPromise<GetBodyFieldAggregateType<T>>;
    /**
     * Group by BodyField.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BodyFieldGroupByArgs} args - Group by arguments.
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
    groupBy<T extends BodyFieldGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: BodyFieldGroupByArgs['orderBy'];
    } : {
        orderBy?: BodyFieldGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, BodyFieldGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBodyFieldGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the BodyField model
     */
    readonly fields: BodyFieldFieldRefs;
}
/**
 * The delegate class that acts as a "Promise-like" for BodyField.
 * Why is this prefixed with `Prisma__`?
 * Because we want to prevent naming conflicts as mentioned in
 * https://github.com/prisma/prisma-client-js/issues/707
 */
export interface Prisma__BodyFieldClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
 * Fields of the BodyField model
 */
export interface BodyFieldFieldRefs {
    readonly id: Prisma.FieldRef<"BodyField", 'Int'>;
    readonly key: Prisma.FieldRef<"BodyField", 'String'>;
    readonly value: Prisma.FieldRef<"BodyField", 'String'>;
    readonly type: Prisma.FieldRef<"BodyField", 'String'>;
    readonly description: Prisma.FieldRef<"BodyField", 'String'>;
    readonly enabled: Prisma.FieldRef<"BodyField", 'Boolean'>;
    readonly requestId: Prisma.FieldRef<"BodyField", 'Int'>;
}
/**
 * BodyField findUnique
 */
export type BodyFieldFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BodyField
     */
    select?: Prisma.BodyFieldSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the BodyField
     */
    omit?: Prisma.BodyFieldOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.BodyFieldInclude<ExtArgs> | null;
    /**
     * Filter, which BodyField to fetch.
     */
    where: Prisma.BodyFieldWhereUniqueInput;
};
/**
 * BodyField findUniqueOrThrow
 */
export type BodyFieldFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BodyField
     */
    select?: Prisma.BodyFieldSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the BodyField
     */
    omit?: Prisma.BodyFieldOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.BodyFieldInclude<ExtArgs> | null;
    /**
     * Filter, which BodyField to fetch.
     */
    where: Prisma.BodyFieldWhereUniqueInput;
};
/**
 * BodyField findFirst
 */
export type BodyFieldFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BodyField
     */
    select?: Prisma.BodyFieldSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the BodyField
     */
    omit?: Prisma.BodyFieldOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.BodyFieldInclude<ExtArgs> | null;
    /**
     * Filter, which BodyField to fetch.
     */
    where?: Prisma.BodyFieldWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of BodyFields to fetch.
     */
    orderBy?: Prisma.BodyFieldOrderByWithRelationInput | Prisma.BodyFieldOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for BodyFields.
     */
    cursor?: Prisma.BodyFieldWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` BodyFields from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` BodyFields.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of BodyFields.
     */
    distinct?: Prisma.BodyFieldScalarFieldEnum | Prisma.BodyFieldScalarFieldEnum[];
};
/**
 * BodyField findFirstOrThrow
 */
export type BodyFieldFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BodyField
     */
    select?: Prisma.BodyFieldSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the BodyField
     */
    omit?: Prisma.BodyFieldOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.BodyFieldInclude<ExtArgs> | null;
    /**
     * Filter, which BodyField to fetch.
     */
    where?: Prisma.BodyFieldWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of BodyFields to fetch.
     */
    orderBy?: Prisma.BodyFieldOrderByWithRelationInput | Prisma.BodyFieldOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for BodyFields.
     */
    cursor?: Prisma.BodyFieldWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` BodyFields from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` BodyFields.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of BodyFields.
     */
    distinct?: Prisma.BodyFieldScalarFieldEnum | Prisma.BodyFieldScalarFieldEnum[];
};
/**
 * BodyField findMany
 */
export type BodyFieldFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BodyField
     */
    select?: Prisma.BodyFieldSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the BodyField
     */
    omit?: Prisma.BodyFieldOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.BodyFieldInclude<ExtArgs> | null;
    /**
     * Filter, which BodyFields to fetch.
     */
    where?: Prisma.BodyFieldWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of BodyFields to fetch.
     */
    orderBy?: Prisma.BodyFieldOrderByWithRelationInput | Prisma.BodyFieldOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing BodyFields.
     */
    cursor?: Prisma.BodyFieldWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` BodyFields from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` BodyFields.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of BodyFields.
     */
    distinct?: Prisma.BodyFieldScalarFieldEnum | Prisma.BodyFieldScalarFieldEnum[];
};
/**
 * BodyField create
 */
export type BodyFieldCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BodyField
     */
    select?: Prisma.BodyFieldSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the BodyField
     */
    omit?: Prisma.BodyFieldOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.BodyFieldInclude<ExtArgs> | null;
    /**
     * The data needed to create a BodyField.
     */
    data: Prisma.XOR<Prisma.BodyFieldCreateInput, Prisma.BodyFieldUncheckedCreateInput>;
};
/**
 * BodyField createMany
 */
export type BodyFieldCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to create many BodyFields.
     */
    data: Prisma.BodyFieldCreateManyInput | Prisma.BodyFieldCreateManyInput[];
    skipDuplicates?: boolean;
};
/**
 * BodyField createManyAndReturn
 */
export type BodyFieldCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BodyField
     */
    select?: Prisma.BodyFieldSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the BodyField
     */
    omit?: Prisma.BodyFieldOmit<ExtArgs> | null;
    /**
     * The data used to create many BodyFields.
     */
    data: Prisma.BodyFieldCreateManyInput | Prisma.BodyFieldCreateManyInput[];
    skipDuplicates?: boolean;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.BodyFieldIncludeCreateManyAndReturn<ExtArgs> | null;
};
/**
 * BodyField update
 */
export type BodyFieldUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BodyField
     */
    select?: Prisma.BodyFieldSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the BodyField
     */
    omit?: Prisma.BodyFieldOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.BodyFieldInclude<ExtArgs> | null;
    /**
     * The data needed to update a BodyField.
     */
    data: Prisma.XOR<Prisma.BodyFieldUpdateInput, Prisma.BodyFieldUncheckedUpdateInput>;
    /**
     * Choose, which BodyField to update.
     */
    where: Prisma.BodyFieldWhereUniqueInput;
};
/**
 * BodyField updateMany
 */
export type BodyFieldUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to update BodyFields.
     */
    data: Prisma.XOR<Prisma.BodyFieldUpdateManyMutationInput, Prisma.BodyFieldUncheckedUpdateManyInput>;
    /**
     * Filter which BodyFields to update
     */
    where?: Prisma.BodyFieldWhereInput;
    /**
     * Limit how many BodyFields to update.
     */
    limit?: number;
};
/**
 * BodyField updateManyAndReturn
 */
export type BodyFieldUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BodyField
     */
    select?: Prisma.BodyFieldSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the BodyField
     */
    omit?: Prisma.BodyFieldOmit<ExtArgs> | null;
    /**
     * The data used to update BodyFields.
     */
    data: Prisma.XOR<Prisma.BodyFieldUpdateManyMutationInput, Prisma.BodyFieldUncheckedUpdateManyInput>;
    /**
     * Filter which BodyFields to update
     */
    where?: Prisma.BodyFieldWhereInput;
    /**
     * Limit how many BodyFields to update.
     */
    limit?: number;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.BodyFieldIncludeUpdateManyAndReturn<ExtArgs> | null;
};
/**
 * BodyField upsert
 */
export type BodyFieldUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BodyField
     */
    select?: Prisma.BodyFieldSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the BodyField
     */
    omit?: Prisma.BodyFieldOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.BodyFieldInclude<ExtArgs> | null;
    /**
     * The filter to search for the BodyField to update in case it exists.
     */
    where: Prisma.BodyFieldWhereUniqueInput;
    /**
     * In case the BodyField found by the `where` argument doesn't exist, create a new BodyField with this data.
     */
    create: Prisma.XOR<Prisma.BodyFieldCreateInput, Prisma.BodyFieldUncheckedCreateInput>;
    /**
     * In case the BodyField was found with the provided `where` argument, update it with this data.
     */
    update: Prisma.XOR<Prisma.BodyFieldUpdateInput, Prisma.BodyFieldUncheckedUpdateInput>;
};
/**
 * BodyField delete
 */
export type BodyFieldDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BodyField
     */
    select?: Prisma.BodyFieldSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the BodyField
     */
    omit?: Prisma.BodyFieldOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.BodyFieldInclude<ExtArgs> | null;
    /**
     * Filter which BodyField to delete.
     */
    where: Prisma.BodyFieldWhereUniqueInput;
};
/**
 * BodyField deleteMany
 */
export type BodyFieldDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which BodyFields to delete
     */
    where?: Prisma.BodyFieldWhereInput;
    /**
     * Limit how many BodyFields to delete.
     */
    limit?: number;
};
/**
 * BodyField without action
 */
export type BodyFieldDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BodyField
     */
    select?: Prisma.BodyFieldSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the BodyField
     */
    omit?: Prisma.BodyFieldOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.BodyFieldInclude<ExtArgs> | null;
};
export {};
//# sourceMappingURL=BodyField.d.ts.map