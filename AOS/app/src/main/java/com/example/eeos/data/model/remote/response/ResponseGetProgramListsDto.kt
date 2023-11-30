package com.example.eeos.data.model.remote.response

import com.example.eeos.consts.Category
import com.example.eeos.consts.ProgramStatus
import com.example.eeos.consts.ProgramType
import kotlinx.serialization.Contextual
import kotlinx.serialization.SerialName
import kotlinx.serialization.Serializable

@Serializable
data class ResponseGetProgramListsDto(
    @SerialName("size")
    val size: Int,
    @SerialName("page")
    val page: Int,
    @SerialName("totalPage")
    val totalPage: Int,
    @SerialName("programs")
    val programs: List<GetProgramDto>
) {
    @Serializable
    data class GetProgramDto(
        @SerialName("programId")
        val programId: Int,
        @SerialName("title")
        val title: String,
        @SerialName("deadLine")
        val deadLine: String,
        @Contextual
        @SerialName("category")
        val category: Category,
        @Contextual
        @SerialName("programStatus")
        val programStatus: ProgramStatus,
        @Contextual
        @SerialName("type")
        val type: ProgramType
    )
}