package com.blackcompany.eeos.program.application.service;

import com.blackcompany.eeos.program.application.model.ProgramStatus;
import com.blackcompany.eeos.program.persistence.ProgramCategory;
import com.blackcompany.eeos.program.persistence.ProgramEntity;
import com.blackcompany.eeos.program.persistence.ProgramRepository;
import java.sql.Timestamp;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class EndProgramStatusService implements ProgramStatusService {
	private final ProgramRepository programRepository;

	@Override
	public ProgramStatus support() {
		return ProgramStatus.END;
	}

	@Override
	public Page<ProgramEntity> getPages(
			ProgramCategory programCategory, Timestamp now, PageRequest pageRequest) {
		if (programCategory.isAll()) {
			return programRepository.findAllByEnd(now, pageRequest);
		}

		return programRepository.findAllByEndAndCategory(programCategory, now, pageRequest);
	}
}
