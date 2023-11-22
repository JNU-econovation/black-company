package com.example.eeos.ui.home

import androidx.compose.foundation.layout.Arrangement
import androidx.compose.foundation.layout.Column
import androidx.compose.foundation.layout.Spacer
import androidx.compose.foundation.layout.padding
import androidx.compose.foundation.layout.size
import androidx.compose.foundation.lazy.LazyColumn
import androidx.compose.foundation.lazy.items
import androidx.compose.material3.Divider
import androidx.compose.material3.MaterialTheme
import androidx.compose.material3.Text
import androidx.compose.runtime.Composable
import androidx.compose.ui.Modifier
import androidx.compose.ui.res.colorResource
import androidx.compose.ui.res.dimensionResource
import androidx.compose.ui.tooling.preview.Preview
import com.example.eeos.R

@Composable
fun ProgramLists(programLists: List<ProgramData>) {
    LazyColumn {
        items(programLists) { program ->
            Program(program)
        }
    }
}

@Composable
private fun Program(program: ProgramData) {
    Column {
        Divider(
            thickness = dimensionResource(id = R.dimen.width_stroke_0_7dp),
            color = colorResource(id = R.color.stroke_400)
        )
        Column(
            modifier = Modifier
                .padding(
                    horizontal = dimensionResource(
                        id = R.dimen.padding_home_screen_program_horizontal
                    )
                )
                .size(
                    width = dimensionResource(id = R.dimen.width_home_screen_program),
                    height = dimensionResource(id = R.dimen.height_home_screen_program)
                ),
            verticalArrangement = Arrangement.Center
        ) {
            Text(
                text = program.date,
                style = MaterialTheme.typography.bodyMedium,
                color = colorResource(R.color.paragraph)
            )
            Spacer(
                modifier = Modifier.size(
                    dimensionResource(id = R.dimen.margin_home_screen_space_between_program_texts)
                )
            )
            Text(
                text = program.title,
                style = MaterialTheme.typography.titleSmall,
                color = colorResource(R.color.paragraph)
            )
        }
    }
}

@Preview(showBackground = true)
@Composable
private fun ProgramPreview() {
    MaterialTheme {
        ProgramLists(
            listOf()
        )
    }
}